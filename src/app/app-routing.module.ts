import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './view/view-list.component';
import { ViewDetailComponent } from './view/view-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ViewListComponent
  },
  {
    path: 'item/:id',
    component: ViewDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
