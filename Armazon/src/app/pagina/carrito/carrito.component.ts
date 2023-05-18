import { Component } from '@angular/core';
import { ComentarioDTO } from 'src/app/modelo/comentario-dto';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { PublicacionProductoDTO } from 'src/app/modelo/publicacion-producto-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  productos: DetalleCompraDTO[];
  valorTotal: number;
  constructor(
    private carritoService: CarritoService,
    private productoService: ProductoService
  ) {
    this.productos = [];
    this.valorTotal = 0;
    const listaCodigos = this.carritoService.listar();
    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        const producto = this.productoService.obtener(cod);
        if (producto != null) {
          this.productos.push(new DetalleCompraDTO(1, producto));
          this.valorTotal += producto.precio;
        }
      }
    }
  }

  calcularValor(precio: number, unidades: number): number {
    return precio * unidades;
  }

  eliminarProducto(item: DetalleCompraDTO): void {
    const index = this.productos.indexOf(item);
    if (index !== -1) {
      this.productos.splice(index, 1);
      this.valorTotal -= this.calcularValor(
        item.publicacionProducto.precio,
        item.unidades
      );
    }
  }

  calcularValorTotal(): number {
    let total = 0;

    for (let item of this.productos) {
      total += item.publicacionProducto.precio * item.unidades;
    }

    this.valorTotal = total;

    return total;
  }

  incrementarUnidades(item: any): void {
    item.unidades++;

    this.calcularValorTotal();
  }

  decrementarUnidades(item: any): void {
    if (item.unidades > 1) {
      item.unidades--;
      this.calcularValorTotal();
    }
  }
}
