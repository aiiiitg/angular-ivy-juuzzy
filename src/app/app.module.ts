// Angular libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // icon markup to simplify UI 
// Custom interfaces
import { AppComponent } from './app.component'; // main todo app with list and detail views
import { AppRoutingModule } from './app-routing.module'; // routing to map routes between list and detail views
import { ItemComponent } from './item/item.component'; // todo item for list view
import { ViewListComponent } from './view/view-list.component'; // list view
import { ViewDetailComponent } from './view/view-detail.component'; // detail view

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, AppRoutingModule ],
  declarations: [ AppComponent, ItemComponent, ViewListComponent, ViewDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
