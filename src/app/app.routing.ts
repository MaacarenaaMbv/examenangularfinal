import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { CubosComponent } from "./components/cubos/cubos.component";
import { DetallesComponent } from "./components/detalles/detalles.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { ComentariosComponent } from "./components/comentarios/comentarios.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cubos/:marca", component: CubosComponent},
    {path: "detalles/:id/:marca", component: DetallesComponent},
    {path: "comentarios/:id/:marca", component: ComentariosComponent},
    {path: "login", component: LoginComponent},
    {path: "logout", component: LogoutComponent}
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);