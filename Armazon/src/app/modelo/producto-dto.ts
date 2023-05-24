export class ProductoDTO {
    nombre: string = "";
    imagenes: string[] = [];
    categoria: string[] = [];
    ciudad: string[] = [];

    constructor(nombre: string, imagenes: string[], categoria: string[], ciudad: string[]) {
        this.nombre = nombre;
        this.imagenes = imagenes;
        this.categoria = categoria;
        this.ciudad = ciudad;
      }
}
