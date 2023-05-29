import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DetalleCompraGetDTO } from 'src/app/modelo/detalle-compra-get-dto';
import { CompraService } from 'src/app/servicios/compra.service';
import { DetalleCompraService } from 'src/app/servicios/detalle-compra.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  compras: DetalleCompraGetDTO[];
  correo: string | null = "";
  codigoUsuario: number = 0;

  constructor(
    private compraService: CompraService,
    private detalleCompraService: DetalleCompraService,
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {
    this.compras = [];
  }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  obtenerCompras(): void {
    this.correo = this.tokenService.getEmail();

    if (this.correo) {
      this.usuarioService.obtenerID(this.correo).subscribe({
        next: (data) => {
          this.codigoUsuario = data.respuesta;

          forkJoin([
            this.detalleCompraService.listarMisCompras(this.codigoUsuario)
          ]).subscribe(([comprasData]) => {
            this.compras = comprasData.respuesta;
          }, (error) => {
            console.log(error);
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}