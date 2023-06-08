import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ElementComponent } from './element/element.component';
import { ElementInfoComponent } from './element-info/element-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ElementComponent,
    ElementInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
