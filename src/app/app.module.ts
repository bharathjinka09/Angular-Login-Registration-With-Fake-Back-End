import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpCallComponent } from './http-call/http-call.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsComponent } from './charts/charts.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuard } from './defender/route.guard';
import { JwtInterceptor } from './support-utility/jwt.interceptor';
import { ErrorInterceptor } from './support-utility/error.interceptor';
import { localBackendProvider } from './support-utility/local-backend';
import { MessageService } from './custom-service/message.service';
import { AuthenticationService } from './custom-service/authentication.service';
import { UserService } from './custom-service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MatNavComponent,
    MatTableComponent,
    MatBoardComponent,
    AngularFormComponent,
    PageNotFoundComponent,
    HttpCallComponent,
    ChartsComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [
    RouteGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    localBackendProvider,
    MessageService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
