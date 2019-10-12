import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ValidationComponent } from './validation/validation.component';



@NgModule({
  declarations: [UserComponent, ValidationComponent],
  imports: [
    CommonModule
  ],
  exports: [UserComponent, ValidationComponent]
})
export class LoginModule { }
