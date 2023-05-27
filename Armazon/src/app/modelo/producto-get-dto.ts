export class ProductoGetDTO {
  nombre: string = '';
  categoria: string[] = [];
  imagenes: string[] = [];
  codigoPublicacionProductos: number[] = [];
  ciudad: string[] = [];

  constructor(
    nombre: string,
    categoria: string[],
    imagenes: string[],
    codigoPublicacionProductos: number[],
    ciudad: string[]
  ) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.imagenes = imagenes;
    this.codigoPublicacionProductos = codigoPublicacionProductos;
    this.ciudad = ciudad;
  }
}
