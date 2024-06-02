import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ],
})
export class RegisterModule { }
