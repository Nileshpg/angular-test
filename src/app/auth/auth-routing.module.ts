import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE_PATH } from '../Constants/constants';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [

  {
    path: ROUTE_PATH.LOGIN,
    component: LoginComponent,
        children: [
      {
        path: ROUTE_PATH.DASHBOARD,
        component: UserDashboardComponent,
        pathMatch: 'full',

      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { 


}
