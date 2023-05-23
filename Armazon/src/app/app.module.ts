import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CreacionProductoComponent } from './pagina/creacion-producto/creacion-producto.component'
import { FavoritoComponent } from './pagina/favorito/favorito.component';
import { ProductoComponent } from './pagina/producto/producto.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CreacionProductoComponent,
    FavoritoComponent,
    ProductoComponent,
    DetalleProductoComponent,
    CarritoComponent,
    BusquedaComponent,
    AlertaComponent,
    GestionProductosComponent,
    RevisarProductosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
