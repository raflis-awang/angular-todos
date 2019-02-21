import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosModule } from '../app/modules/todos/todos.module';
import { LayoutComponent } from './shared/components/layout/layout.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    TodosModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
