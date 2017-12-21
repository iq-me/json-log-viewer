import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LOG } from './../logs';

@Component({
  selector: 'log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.scss']
})
export class LogViewComponent implements OnInit {
  @Input('data') data: any;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  public input: string = '';
  public regexp: string = '';
  public keys: string = '';
  public matches: any = [];
  public preview: any = {};

  constructor() { }

  ngOnInit() {
    // remove after dev
    setTimeout(() => {
      this.regexp = '^(.{23}) ([A-Z]*)  \\[.*\\] ([0-9]*)';
      this.keys = '{ "time": "$1", "level": "$2", "id": $3 }'
      this.input = LOG.log;
      // console.log(LOG.log);
      this.onchange();
    }, 100);
  }

  parse() {
    let output = [];
    let regexp = new RegExp(this.regexp + '(?:.*)');

    this.input.split('\n').forEach((line, i) => {
      this.matches = regexp.exec(line);
      // let match = regexp.exec(d);
      // let item = {};
      // this.keys.split(';').forEach((key, i) => {
      //   if (key) {
      //     item[key] = match[i];
      //   }
      // });
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
