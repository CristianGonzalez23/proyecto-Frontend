import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CreacionProductoComponent } from './pagina/creacion-producto/creacion-producto.component'
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "publicacionProducto", component: CreacionProductoComponent},
{ path: "**", pathMatch: "full", redirectTo: "" },
{ path: "busqueda/:texto", component: BusquedaComponent },
{ path: "detalleProducto", component: DetalleProductoComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }