import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { CRUDDisplayComponent } from './components/crud-display/crud-display.component';
import { CRUDCreateComponent } from './components/crud-create/crud-create.component';
import { CRUDUpdateComponent } from './components/crud-update/crud-update.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CRUDDisplayComponent,
    CRUDCreateComponent,
    CRUDUpdateComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
