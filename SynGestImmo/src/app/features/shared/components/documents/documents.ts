import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-documents',
  imports: [],
  templateUrl: './documents.html',
  styleUrl: './documents.scss',
})
export class Documents {

  @Input() userEntityId!: string;

}
