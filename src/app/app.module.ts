import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ElementComponent } from './components/element/element.component';
import { ElementInfoComponent } from './components/element-info/element-info.component';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ElementComponent,
    ElementInfoComponent,
    BackgroundAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
