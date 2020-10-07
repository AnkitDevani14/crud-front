import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './component/user-page/user-page.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';

const routes: Routes = [
  {path:'',component:UserPageComponent},
  {
    path:'updateUser/:id',component:UserUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
