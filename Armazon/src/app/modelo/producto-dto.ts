export class ProductoDTO {
    nombre: string = "";
    imagen: string[] = [];
    categoria: string[] = [];
    ciudad: string[] = [];


    constructor(nombre: string, imagen: string[], categoria: string[], ciudad: string[]) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categoria = categoria;
        this.ciudad = ciudad;
      }
}
