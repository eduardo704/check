import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginModalComponent } from './login-modal/login-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    LoginModalComponent
  ]
})
export class CommonUiModule { }
