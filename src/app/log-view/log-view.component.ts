import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.scss']
})
export class LogViewComponent {
  @Input('data') data: any;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  public input = '';
  public regexp = '';
  public keys = '';
  public matches: any = [];
  public preview: any = {};

  constructor() { }

  parse() {
    const output = [];
    const regexp = new RegExp(this.regexp + '(?:.*)');

    this.input.split('\n').forEach((line, i) => {
      this.matches = regexp.exec(line);
      line = line.replace(regexp, this.keys);
      output.push(JSON.parse(line));
    });
    this.preview = output[0];

    return output;
  }

  onchange() {
    this.dataChange.emit(this.parse());
  }
}
