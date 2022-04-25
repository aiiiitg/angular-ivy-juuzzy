import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule ],
  exports:      [ MatIconModule ],
  declarations: [ AppComponent, ItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
