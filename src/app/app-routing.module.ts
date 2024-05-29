import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATH } from './Constants/constants';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: ROUTE_PATH.ABSOLUTE,
    component: HomeComponent,
    pathMatch: 'full',

  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./auth/auth.module').then((m) => m.AuthModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
