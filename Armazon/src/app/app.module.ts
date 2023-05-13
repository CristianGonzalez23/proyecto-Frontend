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
import { MyCartComponent } from './pagina/my-cart/my-cart.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CreacionProductoComponent,
    FavoritoComponent,
    ProductoComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
