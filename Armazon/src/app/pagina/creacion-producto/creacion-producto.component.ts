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

  ciudades: string[] = [];
  ciudadesSeleccionadas: string[] = [];
  ciudadSeleccionada: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private imagenService: ImagenService,
    private categoriaService: CategoriaService,
    private ciudadService: CiudadService
  ) {
    this.codigoProducto = this.route.snapshot.params['codigo'];
    this.producto = new PublicacionProductoDTO(
      500000,
      20,
      'alguna descripcion',
      1,
      1,
      new ProductoGetDTO(
        1,
        'Televisor LG 4K',
        ['https://picsum.photos/450/225', 'https://picsum.photos/450/225'],
        ['TECNOLOGIA'],
        ['ARMENIA']
      ),
      new ComentarioGetDTO('algun texto', 0, 0, 0)
    );
  }

  ngOnInit(): void {
    this.obtenerCiudades();
    this.obtenerCat();

    this.route.params.subscribe((params) => {
      this.codigoProducto = params['codigo'];
      let objetoProducto = this.productoService.obtener(this.codigoProducto);
      if (objetoProducto != null) {
        this.producto.codigoProducto = objetoProducto.codigoProducto;
        this.producto.codigoVendedor = objetoProducto.codigoVendedor;
        this.producto.comentarioDTO = objetoProducto.comentarioGetDTO;
        this.producto.descripcion = objetoProducto.descripcion;
        this.producto.precio = objetoProducto.precio;
        this.producto.productoDTO = objetoProducto.productoGetDTO;
        this.producto.unidades = objetoProducto.unidades;

        // Cargar las categorías seleccionadas desde el objeto ProductoGetDTO
        this.categoriasSeleccionadas = [...this.producto.productoDTO.categoria];

        // Cargar las ciudades seleccionadas desde el objeto ProductoGetDTO
        this.ciudadesSeleccionadas = [...this.producto.productoDTO.ciudad];

        this.esEdicion = true;
      }
    });
  }

  obtenerCat(): void {
    /*
    this.categorias.push('Tecnología');
    this.categorias.push('Hogar');
    this.categorias.push('Deportes');
    this.categorias.push('Moda');
    this.categorias.push('Mascotas');*/
    this.categoriaService.listar().subscribe({
      next: (data) => {
        this.categorias = data.respuesta;
      },
      error: (error) => {
        console.log(error.error);
        console.log("pailas, paso algo");
      },
    });
  }

  obtenerCiudades(): void {
    /*
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
    */
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
      this.categoriaSeleccionada &&
      !this.categoriasSeleccionadas.includes(this.categoriaSeleccionada)
    ) {
      this.categoriasSeleccionadas.push(this.categoriaSeleccionada);
      console.log(this.categoriaSeleccionada);
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
    if (this.producto.imagenes.length > 0) {
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
