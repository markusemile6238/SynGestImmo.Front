import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {RoleModel} from '../models/roleModel';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {

  @Input() selectLabel!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() control!: FormControl<number|null>;
  @Input() options!: Observable<RoleModel[]>;
}
