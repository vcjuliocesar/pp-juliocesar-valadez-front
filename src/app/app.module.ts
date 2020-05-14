import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [AppComponent, RegisterComponent, UserListComponent],
  imports: [BrowserModule, FormsModule,HttpClientModule,MomentModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
