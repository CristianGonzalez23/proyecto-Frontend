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
const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "publicacionProducto", component: CreacionProductoComponent},
{ path: "**", pathMatch: "full", redirectTo: "" },
{ path: "busqueda/:texto", component: BusquedaComponent },
{ path: "detalleProducto", component: DetalleProductoComponent},
{ path: "carrito", component: CarritoComponent},
{ path: "productos", component: ProductosComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }