import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CreacionProductoComponent } from './pagina/creacion-producto/creacion-producto.component'
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { ProductosComponent } from './pagina/productos-en-venta/productos-en-venta.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';


const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "publicacionProducto", component: CreacionProductoComponent},
{ path: "busqueda/:texto", component: BusquedaComponent },
{ path: "detalle-producto/:codigo", component: DetalleProductoComponent},
{ path: "carrito", component: CarritoComponent},
{ path: "productos", component: ProductosComponent},
{ path: "gestionProducto", component: GestionProductosComponent},
{ path: "editar-producto/:codigo", component: CreacionProductoComponent },
{ path: "**", pathMatch: "full", redirectTo: "" },
{ path: "login", component: LoginComponent, canActivate: [LoginGuard] },
{ path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },


{ path: "crear-producto", component: CreacionProductoComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
{ path: "editar-producto/:codigo", component: CreacionProductoComponent, canActivate:
    [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: "gestionar-productos", component: GestionProductosComponent, canActivate:
    [RolesGuard], data: { expectedRole: ["CLIENTE"] } },

{ path: "revisar-productos", component: RevisarProductosComponent, canActivate: [RolesGuard],
    data: { expectedRole: ["MODERADOR"] } },


];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }