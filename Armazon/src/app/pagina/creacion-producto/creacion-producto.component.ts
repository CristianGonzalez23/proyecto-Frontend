import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioGetDTO } from 'src/app/modelo/comentario-get-dto';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { PublicacionProductoDTO } from 'src/app/modelo/publicacion-producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-creacion-producto',
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css'],
})
export class CreacionProductoComponent implements OnInit {
  archivos!: FileList;
  producto: PublicacionProductoDTO;
  esEdicion: boolean = false;
  codigoProducto: number;
  /*
  categorias: string[] = [];
  categoriasSeleccionadas: string[] = [];
  categoriaSeleccionada: string | null = null;
*/
  categorias: any[] = [];
  categoriasSeleccionadas: any[] = [];
  categoriaSeleccionada: any | null = null;

  ciudades: any[] = [];
  ciudadesSeleccionadas: any[] = [];
  ciudadSeleccionada: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private imagenService: ImagenService,
    private categoriaService: CategoriaService,
    private ciudadService: CiudadService
  ) {
    this.codigoProducto = this.route.snapshot.params['codigo'];
    this.producto = new PublicacionProductoDTO();
  }

  ngOnInit(): void {
    this.obtenerCiudades();
    this.obtenerCat();

    this.route.params.subscribe((params) => {
      this.codigoProducto = params['codigo'];
      if (this.codigoProducto != null) {
        let objetoProducto = this.productoService.obtener(this.codigoProducto);
        if (objetoProducto != null) {
          this.producto = objetoProducto;
          this.esEdicion = true;
        }
      }
    });
  }

  obtenerCat(): void {
    
    this.categoriaService.listar().subscribe({
      next: (data) => {
        this.categorias = data.respuesta;
      },
      error: (error) => {
        console.log(error.error);
        console.log('pailas, paso algo');
      },
    });
  }

  obtenerCiudades(): void {
    
    this.ciudadService.listar().subscribe({
      next: (data) => {
        this.ciudades = data.respuesta;
      },
      error: (error) => {
        console.log(error.error);
      },
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }

  agregarCategoria() {
    if (
      this.producto.productoGetDTO.categoria &&
      !this.categoriasSeleccionadas.includes(
        this.producto.productoGetDTO.categoria
      )
    ) {
      this.categoriasSeleccionadas.push(this.producto.productoGetDTO.categoria);
      console.log(this.producto.productoGetDTO.categoria);
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
      this.producto.productoGetDTO.ciudad &&
      !this.ciudadesSeleccionadas.includes(this.producto.productoGetDTO.ciudad)
    ) {
      this.ciudadesSeleccionadas.push(this.producto.productoGetDTO.ciudad);
      console.log(this.producto.productoGetDTO.ciudad);
    }
  }

  eliminarCiudad(ciudad: string) {
    const index = this.ciudadesSeleccionadas.indexOf(ciudad);
    if (index !== -1) {
      this.ciudadesSeleccionadas.splice(index, 1);
    }
  }

  public crearProducto() {
    console.log('funciona el emtodo');
    if (this.producto.productoGetDTO.imagenes.length > 0) {
      this.productoService.crearPublicacionProducto(this.producto).subscribe({
        next: (data) => {
          console.log(data.respuesta);
        },
        error: (error) => {
          console.log(error.error);
        },
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  public subirImagenes() {
    if (this.archivos != null && this.archivos.length > 0) {
      const objeto = this.producto;
      const formData = new FormData();

      for (let i = 0; i < this.archivos.length; i++) {
        formData.append('files', this.archivos[i]);
      }

      this.imagenService.subir(formData).subscribe({
        next: (data) => {
          // Aquí puedes manejar la respuesta del backend si es necesario
        },
        error: (error) => {
          console.log(error.error);
        },
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }
}
