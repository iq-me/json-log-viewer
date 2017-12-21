import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectizeModule } from 'ng-selectize';

import { AppComponent } from './app.component';
import { LogViewComponent } from './log-view/log-view.component';
import { JsonTableComponent } from './json-table/json-table.component';
import { JsonViewComponent } from './json-view/json-view.component';
import { ItemViewComponent } from './item-view/item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LogViewComponent,
    JsonTableComponent,
    JsonViewComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectizeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
