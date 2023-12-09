import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guard/auth.guard';
import { AddAndUpdateComponent } from './add-and-update/add-and-update.component';
import { ApperanceComponent } from './apperance/apperance.component';
import { CrudProductsComponent } from './crud-products/crud-products.component';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent,title:"تسجيل الدخول"  },
  {path: 'HomePage', component:MainComponent ,title:"Home Page" , canActivate:[authGuard]},
  {path:'crudproducts',component:CrudProductsComponent,title: 'Crud Products Page' , canActivate:[authGuard]},
  {path:'addAndUpdate',component:AddAndUpdateComponent,title:"Add OR Update Page", canActivate:[authGuard]},
  {path:'crudUsers',component:CrudUsersComponent,title:"Crud Users Page", canActivate:[authGuard]},
  {path:'updateUsers',component:UpdateUserComponent,title:"Update Users Page", canActivate:[authGuard]},
  {path:'apperance',component:ApperanceComponent,title:"Apperance", canActivate:[authGuard]},
  {path:'cart',component:CartComponent,title:"cart", canActivate:[authGuard]},

    {path:'**',component:NotFoundComponent,title:"Not Found"},

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }









