import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { RegisterModule } from "../register/register.module";
@NgModule({
  imports: [CommonModule, AuthRoutingModule,RegisterModule],
  declarations: [UserDashboardComponent],
})
export class AuthModule {}
