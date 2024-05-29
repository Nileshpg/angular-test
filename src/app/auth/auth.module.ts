import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [UserDashboardComponent],
})
export class AuthModule {}
