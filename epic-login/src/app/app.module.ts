import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from './auth/auth.service';
import {DataStorageService} from './auth/data-storage.service';
import { ServersComponent } from './servers/servers.component';
import { ResultComponent } from './result/result.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'signup', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: SignupComponent},
  {path: 'Signin', component: LoginComponent},
  {path: 'Servers', component: ServersComponent},
  {path: 'result', component: ResultComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    AuthComponent,
    ServersComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
