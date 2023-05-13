export class ProductoGetDTO {
    codigo: number = 0;
    nombre: string = "";
    imagen: string[] = [];
    categoria: string[] = [];
    ciudad: string[] = [];


    constructor(codigo: number, nombre: string, imagen: string[], categoria: string[], ciudad: string[]) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categoria = categoria;
        this.ciudad = ciudad;
      }
}
