import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityTypeEnum, UserProfile, UserProfileLabel} from '../../Models/UserProfile';
import {ProfilService} from '../../services/profil-service';
import {finalize} from 'rxjs';
import {ProfileFormCtrls} from '../../../forms/ProfileForm/profile.form.types';
import {ProfileForm} from '../../../forms/ProfileForm/profile.form';
import {TableColumn} from '../table/TableColumn';
import {CommonModule} from '@angular/common';
import {PROFILE_FORM_ERRORS} from '../../../forms/ProfileForm/profile.form.errors';
import {FormInput} from '../form/input/formInput';
import {Select} from '../form/select/select';
import {DisplayErrors} from '../form/display-errors/display-errors';
import {ApiResponse} from '../../Models/ApiResponse';
import {SnackBarService} from '../../../../core/services/snack-bar-service';


@Component({
  selector: 'app-profile',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, FormInput, Select, DisplayErrors],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  // initialiser les données
  userProfile: UserProfile | undefined = undefined;
  _userId!: string;
  loaded: boolean = false;

  form!: ProfileFormCtrls;
  readonly errors = PROFILE_FORM_ERRORS;
  tableColumns: TableColumn[] = [];
  showForm: boolean = false;

  entityTypeOptionsForm = Object.entries(EntityTypeEnum)
    .filter(([key, value]) => isNaN(Number(key)))
    .map(([key, value]) => ({
      name: key,
      id: value as number,
    }));

  // receptionner les données du parent
  @Input() set userEntityId(entityId: string) {
    if (entityId) {
      this._userId = entityId;
      this.loadProfile(entityId);
    }
  }

  get userEntityId(): string {
    return this._userId;
  }


  //constructor
  constructor(
    private profileService$: ProfilService,
    private createFormCtrls: ProfileForm,
    private cdr: ChangeDetectorRef,
    private snackBarService: SnackBarService) {
  }


  ngOnInit(): void {
    // initialisation du formulaire

    // generation des données colonnes et rows d'affichage
  }

  // charger le profile avec le EntityId passer par le parent
  loadProfile(id: string): void {
    this.loaded = false;
    this.profileService$.getUserProfile(id)
      .pipe(finalize(() => {
          console.log(this.userProfile)
          this.loaded = true;
          this.cdr.detectChanges();
        }
      ))
      .subscribe({
        next: (res) => {
          if (res.isSuccess && res.data) {
            this.userProfile = res.data;
            this.generateColumns(res.data);
            this.form = this.createFormCtrls.build(this.userEntityId);
            this.createFormCtrls.patch(this.form, res.data);
            // patcher le formulaire
          } else {
            this.userProfile = undefined;
            this.form = this.createFormCtrls.build(this.userEntityId)
            this.showForm = true;
          }
        }, error: () => {
          this.userProfile = undefined;
        }
      })
  }

  fetchForm() {

  }

  saveProfile() {
    if (this.form.valid) {

      const raw = this.form.getRawValue();
      const entityTValue = this.form.get('entityType')?.value;

      const entityT = entityTValue ? Number.parseInt(entityTValue, 10) : 0;

      const payload: Partial<UserProfile> = {
        entityId: raw.entityId,
        entityType: entityT as EntityTypeEnum,
        displayName: raw.displayName,
        email: raw.email,
        phone: raw.phone,
        lastName: raw.lastName,
        firstName: raw.firstName,
        birthDate: new Date(raw.birthDate),
        nationalId: raw.nationalId
      }

      if (this.userProfile == undefined) {
        this.profileService$.createNewProfile(payload).subscribe({
          next: (res: ApiResponse) => {
            if (res.isSuccess) {
              this.snackBarService.success("Profile create successfully.");
              this.loadProfile(this.userEntityId);
            } else {
              this.snackBarService.error(res.statusCode + "\n" + res.message)
            }
          }
        })
      }else{
        console.log(payload)
        this.profileService$.updateProfile(payload).subscribe({
          next: (res: ApiResponse) => {
            if (res.isSuccess) {
              this.snackBarService.success("Profile updated successfully.");
              this.loadProfile(this.userEntityId);
            } else {
              this.snackBarService.error(res.statusCode + "\n" + res.message)
            }
          }
        })
      }
    }
  }

  private generateColumns(dataSample: UserProfile) {
    this.tableColumns = Object.keys(dataSample).map(key => {
      return {value: (UserProfileLabel as any)[key], key: key}
    })
  }

  restoreData(){
    this.createFormCtrls.patch(this.form,this.userProfile!);
  }

}
