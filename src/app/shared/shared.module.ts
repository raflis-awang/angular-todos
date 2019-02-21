import { NgModule } from '@angular/core';

import { FirebaseModule } from './firebase.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    FirebaseModule,
  ],
  declarations: components,
  exports: [
    FirebaseModule,
    ...components,
  ]
 })

export class SharedModule {

}