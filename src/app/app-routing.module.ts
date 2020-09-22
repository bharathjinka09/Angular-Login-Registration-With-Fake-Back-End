import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpCallComponent } from './http-call/http-call.component';
import { ChartsComponent } from './charts/charts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuard } from './defender/route.guard';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: MatBoardComponent, canActivate : [RouteGuard]},
    {path:'table', component: MatTableComponent, canActivate : [RouteGuard]},
    {path:'form', component: AngularFormComponent, canActivate : [RouteGuard]},
    {path:'charts', component: ChartsComponent, canActivate : [RouteGuard]},
    {path:'http', component: HttpCallComponent, canActivate : [RouteGuard]},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'**', component: PageNotFoundComponent}
];

@NgModule(

	{
		imports: [RouterModule.forRoot(routes)],
		exports: [RouterModule]
	}
)

export class AppRoutingModule{
}