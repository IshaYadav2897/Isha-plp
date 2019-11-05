import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { NaviRoutingModule } from './navi/navi-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { AdminCafedetailsComponent } from './admin-cafedetails/admin-cafedetails.component';
import { UserCafedetailsComponent } from './user-cafedetails/user-cafedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    ListComponent,
    AdminCafedetailsComponent,
    UserCafedetailsComponent
  ],
  imports: [
    BrowserModule, NaviRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
