import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableColumn} from './TableColumn';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-table.html'
})
export class AppTableComponent {

  private _columns!: TableColumn[];

  @Input() data: any[] = [];
  @Input() set columns(value: TableColumn[]){
    this._columns = value;
  };
  get column(): TableColumn[]{
    return this._columns;
  }
}
