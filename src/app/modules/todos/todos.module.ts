import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';

import { TodosRouting } from './todos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosListingComponent } from './pages/todos-listing/todos-listing.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRouting,
    ReactiveFormsModule,
  ],
  declarations: [
    TodosListingComponent,
    TimeAgoPipe,
  ],
  entryComponents: [
    TodosListingComponent
  ]
})

export class TodosModule { }
