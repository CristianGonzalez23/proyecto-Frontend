import { Component } from '@angular/core';
import { CompraDTO } from 'src/app/modelo/compra-dto';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent {
  productos: string[]=[];

  compra:CompraDTO ;
  constructor(){
    this.compra=new CompraDTO;
  }

  public comprar(){
    console.log(this.compra);
  }
  



}
