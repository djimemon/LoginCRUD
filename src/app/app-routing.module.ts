import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CRUDDisplayComponent} from "./components/crud-display/crud-display.component";
import {LoginComponent} from "./components/login/login.component";
import {CRUDUpdateComponent} from "./components/crud-update/crud-update.component";
import {CRUDCreateComponent} from "./components/crud-create/crud-create.component";
import {GuardLoginGuard} from "./guards/guard-login.guard";

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'list',canActivate: [GuardLoginGuard], component: CRUDDisplayComponent},
  {path: 'update',canActivate: [GuardLoginGuard], component: CRUDUpdateComponent},
  {path: 'create', canActivate: [GuardLoginGuard], component: CRUDCreateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
