import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';

const children: Routes = [
  {
    path: '',
    loadChildren: './modules/todos/todos.module#TodosModule',
  },
];

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children,
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
