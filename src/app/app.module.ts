import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// AngularFire
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { environment } from '../environments/environment';
import { AddAndUpdateComponent } from './add-and-update/add-and-update.component';
import { ApperanceComponent } from './apperance/apperance.component';
import { CrudProductsComponent } from './crud-products/crud-products.component';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { HeaderComponent } from './header/header.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LastFewTransactionsComponent,
    MainComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    SideNavComponent,
    TopThreeProductsComponent,
    TopWidgetsComponent,
    CrudProductsComponent,
    NotFoundComponent,
    CrudProductsComponent,
    AddAndUpdateComponent,
    CrudUsersComponent,
    UpdateUserComponent,
    ApperanceComponent,
    LoginPageComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


