import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, orderBy } from 'lodash';

@Component({
  selector: 'json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {
  @Input('data') data: any[];
  @Input('selectedItem') selectedItem: number;
  @Output() selectedItemChange: EventEmitter<number> = new EventEmitter();

  order: any;
  columns = [];

  col: string = '';
  search: string = '';

  items: any[] = [];

  constructor() {
    this._initLocalStorage('columns', []);
    this._initLocalStorage('order', {});
    this._save('order');
    this._save('columns');
  }

  private _initLocalStorage(field, defaultValue) {
    this[field] = !localStorage.getItem(field) ? defaultValue : JSON.parse(localStorage.getItem(field));
  }

  private _save(field) {
    localStorage.setItem(field, JSON.stringify(this[field]));
  }

  ngOnInit() {
    this.selectedItem = this.selectedItem ? this.selectedItem : 0;
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  init() {
    let _filter = {};
    if (this.search) {
      try {
        _filter = JSON.parse(this.search);
      } catch (e) {
        let regexp = new RegExp(this.search);
        _filter = obj => regexp.test(JSON.stringify(obj));
      }
    }

    let keys = [];
    let order = [];
    Object.keys(this.order).forEach((key) => {
      keys.push(key);
      order.push(this.order[key]);
    });

    let data = orderBy(filter(this.data, _filter), keys, order);
    this.items = data.map((val, i) => {
      return { i, value: val }
    });
  }

  selectItem(i) {
    this.selectedItem = i;
    this.selectedItemChange.emit(i);
  }

  sort(column) {
    if (!this.order[column]) {
      this.order[column] = 'asc';
    } else if (this.order[column] === 'asc') {
      this.order[column] = 'desc';
    } else {
      delete this.order[column];
    }
    this._save('order');
    this.init();
  }

  getByString = (o, s) => {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    let a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }

  remove(e, column) {
    e.stopPropagation();
    this.columns.splice(this.columns.indexOf(column), 1);
    this._save('columns');
  }

  addCol() {
    this.columns.push(this.col);
    this.col = '';
    this._save('columns');
  }
}
