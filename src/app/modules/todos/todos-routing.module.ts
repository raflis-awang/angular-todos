import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListingComponent } from './pages/todos-listing/todos-listing.component';

const routes: Routes = [
  {
    path: '',
    component: TodosListingComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})

export class TodosRouting {
}
