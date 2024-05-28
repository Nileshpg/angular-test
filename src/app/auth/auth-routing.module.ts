import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE_PATH } from '../Constants/constants';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: ROUTE_PATH.ABSOLUTE,
    children: [
      {
        path: ROUTE_PATH.LOGIN,
        component: LoginComponent,
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
