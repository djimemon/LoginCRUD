import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CrudDisplayComponent} from "./components/crud-display/crud-display.component";
import {LoginComponent} from "./components/login/login.component";
import {CrudUpdateComponent} from "./components/crud-update/crud-update.component";
import {CrudCreateComponent} from "./components/crud-create/crud-create.component";
import {GuardLoginGuard} from "./guards/guard-login.guard";

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'list', component: CrudDisplayComponent},
  {path: 'update', component: CrudUpdateComponent},
  {path: 'create',  component: CrudCreateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
