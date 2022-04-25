import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './view/view-list.component';

const routes: Routes = [
  {
    path: '',
    component: ViewListComponent
  }/*,
  {
    path: 'users/:username',
    component: UserComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
