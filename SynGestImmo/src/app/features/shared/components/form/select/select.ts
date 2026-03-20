import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-select',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {

  @Input() selectLabel!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() control!: FormControl<string|number|null>;
  @Input() options!: {id:number,name:string}[];
}
