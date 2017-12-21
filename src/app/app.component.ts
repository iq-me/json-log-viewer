import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  data = [];
  selectedItem = 0;
  views = {
    json: false,
    log: true
  }
  url = 'http://localhost:3300/?f=test.log';
  nestedUrlProperty = '';

  constructor(
    public http: HttpClient
  ) {
  }

  toggle(view) {
    let value = !this.views[view];
    Object.keys(this.views).forEach((key) => {
      this.views[key] = false;
    });
    this.views[view] = value;
  }

  getData() {
    this.http.get(this.url)
      .subscribe((res: any[]) => {
        this.data = this.nestedUrlProperty ? this.getByString(res, this.nestedUrlProperty) : res;
      })
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
}
