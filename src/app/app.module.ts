import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { RegisterModule } from "./register/register.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RegisterModule
    
    

  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
