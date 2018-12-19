import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import {RoutingModule} from "./routing/routing.module";
import { SignUpComponent } from './Components/auth/sign-up/sign-up.component';
import { SignInComponent } from './Components/auth/sign-in/sign-in.component';
import { AuthGuard } from './_guards/auth.guard';
import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./Services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticatedGuard} from "./_guards/authenticated.guard";
import { BranchesOverviewComponent } from './Components/branches/branches-overview/branches-overview.component';
import { BrancheEditComponent } from './Components/branches/branche-edit/branche-edit.component';
import { BranchAddComponent } from './Components/branches/branch-add/branch-add.component';
import { BranchesComponent } from './Components/branches/branches.component';
import {InstallationService} from "./Services/installation.service";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {BranchService} from "./Services/branch.service";
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    BranchesOverviewComponent,
    BrancheEditComponent,
    BranchAddComponent,
    BranchesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    AuthGuard,
    AuthenticatedGuard,
    AuthService,
    InstallationService,
    BranchService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
