export class ProductoGetDTO {
    codigo: number = 0;
    nombre: string = "";
    imagenes: string[] = [];
    categoria: string[] = [];
    ciudad: string[] = [];


    constructor(codigo: number, nombre: string, imagenes: string[], categoria: string[], ciudad: string[]) {
      this.codigo = codigo;
        this.nombre = nombre;
        this.imagenes = imagenes;
        this.categoria = categoria;
        this.ciudad = ciudad;
      }
}
