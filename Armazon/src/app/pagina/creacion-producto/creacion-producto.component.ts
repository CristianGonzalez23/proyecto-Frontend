import { Component } from '@angular/core';
import { PublicacionProductoDTO } from 'src/app/modelo/publicacion-producto-dto';

@Component({
  selector: 'app-creacion-producto',
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css'],
})
export class CreacionProductoComponent {
  archivos!: FileList;

  producto: PublicacionProductoDTO;
  constructor() {
    this.producto = new PublicacionProductoDTO();
    this.categorias = [];
    this.ciudades = [];
  }

  //MENU DE CATEGORIAS
  categorias: string[] = [];
  categoriasSeleccionadas: string[] = [];
  categoriaSeleccionada: string | null = null;

  obtenerCat(): void {
    this.categorias.push('Tecnología');
    this.categorias.push('Hogar');
    this.categorias.push('Deportes');
    this.categorias.push('Moda');
    this.categorias.push('Mascotas');
  }

  //MENU DE CIUDADES
  ciudades: string[] = [];
  ciudadesSeleccionadas: string[] = [];
  ciudadSeleccionada: string | null = null;

  ngOnInit(): void {
    this.obtenerCiudades();
    this.obtenerCat();
  }

  obtenerCiudades(): void {
    this.ciudades.push('Bogota');
    this.ciudades.push('Medellin');
    this.ciudades.push('Cali');
    this.ciudades.push('Barranquilla');
    this.ciudades.push('Cartagena');
    this.ciudades.push('Santa Marta');
    this.ciudades.push('Bucaramanga');
    this.ciudades.push('Manizales');
    this.ciudades.push('Pereira');
    this.ciudades.push('Ibague');
    this.ciudades.push('Cucuta');
    this.ciudades.push('Villavicencio');
    this.ciudades.push('Pasto');
    this.ciudades.push('Monteria');
    this.ciudades.push('Valledupar');
    this.ciudades.push('Armenia');
    this.ciudades.push('Neiva');
    this.ciudades.push('Sincelejo');
    this.ciudades.push('Tunja');
    this.ciudades.push('Riohacha');
    this.ciudades.push('Popayan');
    this.ciudades.push('Quibdo');
    this.ciudades.push('Florencia');
    this.ciudades.push('Yopal');
    this.ciudades.push('Mocoa');
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }

  agregarCategoria() {
    if (
      this.categoriaSeleccionada &&
      !this.categoriasSeleccionadas.includes(this.categoriaSeleccionada)
    ) {
      this.categoriasSeleccionadas.push(this.categoriaSeleccionada);
    }
  }

  eliminarCategoria(categoria: string) {
    const index = this.categoriasSeleccionadas.indexOf(categoria);
    if (index !== -1) {
      this.categoriasSeleccionadas.splice(index, 1);
    }
  }

  agregarCiudad() {
    if (
      this.ciudadSeleccionada &&
      !this.ciudadesSeleccionadas.includes(this.ciudadSeleccionada)
    ) {
      this.ciudadesSeleccionadas.push(this.ciudadSeleccionada);
    }
  }

  eliminarCiudad(ciudad: string) {
    const index = this.ciudadesSeleccionadas.indexOf(ciudad);
    if (index !== -1) {
      this.ciudadesSeleccionadas.splice(index, 1);
    }
  }

  public crearProducto() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.producto);
    } else {
      console.log('Debe seleccionar al menos una imagen');
    }
  }
}
