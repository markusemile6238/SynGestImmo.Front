import {Component, Input} from '@angular/core';
import {KeyValuePipe} from "@angular/common";
import {FormGroup} from '@angular/forms';
import {ErrorFormModel} from '../models/errorFormModel';

@Component({
  selector: 'app-display-errors',
  imports: [
    KeyValuePipe
  ],
  templateUrl: './display-errors.html',
  styleUrl: './display-errors.scss',
})
export class DisplayErrors {

  @Input() form! : FormGroup;
  @Input() errorMessage!: ErrorFormModel[];

  getErrorMessage(controlName:string, errorType:string) :string | null {

    const error = this.errorMessage.find(error=>error.name === controlName && error.type===errorType);
    return error ? error.message : null;

  }


  protected readonly confirm = confirm;
}
