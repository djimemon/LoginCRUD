import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { CrudDisplayComponent } from './components/crud-display/crud-display.component';
import { CrudCreateComponent } from './components/crud-create/crud-create.component';
import { CrudUpdateComponent } from './components/crud-update/crud-update.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {CrudService} from './services/crud/crud.service'
import {LoginService} from './services/login/login.service';

import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudDisplayComponent,
    CrudCreateComponent,
    CrudUpdateComponent,
    NavBarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    RouterTestingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [CrudService,
  LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
