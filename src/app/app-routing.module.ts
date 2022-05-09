import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CRUDDisplayComponent} from "./components/crud-display/crud-display.component";
import {LoginComponent} from "./components/login/login.component";
import {CRUDUpdateComponent} from "./components/crud-update/crud-update.component";
import {CRUDCreateComponent} from "./components/crud-create/crud-create.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list', component: CRUDDisplayComponent},
  {path: 'update', component: CRUDUpdateComponent},
  {path: 'create', component: CRUDCreateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
