import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { AddComponent } from '../add/add.component';
import { ListComponent } from '../list/list.component';
import { AdminCafedetailsComponent } from '../admin-cafedetails/admin-cafedetails.component';
import { UserCafedetailsComponent } from '../user-cafedetails/user-cafedetails.component';

const routes: Routes = [
  {path:'',redirectTo:'/add',pathMatch:'full'},
  {path:'admin-cafedetails',component:AdminCafedetailsComponent},
  {path:'user-cafedetails',component:UserCafedetailsComponent},
  {path:'search',component:SearchComponent},
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'**',redirectTo:'/add',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
