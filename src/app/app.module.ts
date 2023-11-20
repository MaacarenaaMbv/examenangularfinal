import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { ServiceCubo } from './services/service.cubo';
import { ServiceLogin } from './services/service.login';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    CubosComponent,
    DetallesComponent,
    ComentariosComponent,
    LogoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProvider, ServiceCubo, ServiceLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
