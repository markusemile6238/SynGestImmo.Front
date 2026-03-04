import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [

    ReactiveFormsModule
  ],
  templateUrl: './formInput.html',
  styleUrl: './formInput.scss',
})
export class FormInput {

  showPassword: boolean = false;

  @Input() control!: FormControl<any>;
  @Input() name!: string;
  @Input() type!: string;
  @Input() label!: string;

  isvalid :boolean=false;






}
