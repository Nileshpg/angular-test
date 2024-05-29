import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ROUTE_PATH } from "../Constants/constants";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: UserDashboardComponent,
    // pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
