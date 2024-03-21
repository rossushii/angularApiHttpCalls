import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Import FormsModule if needed
  ],
  exports: [
    LoginComponent // Export the LoginComponent
  ]
})
export class LoginModule { }
