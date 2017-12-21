import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LOG } from './../logs';

@Component({
  selector: 'json-view',
  templateUrl: './json-view.component.html',
  styleUrls: ['./json-view.component.scss']
})
export class JsonViewComponent {
  @Input('data') data: any;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  public input: string = '';

  onchange() {
    this.dataChange.emit(JSON.parse(this.input));
  }
}
