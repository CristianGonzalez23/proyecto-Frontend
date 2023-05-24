import { Component } from '@angular/core';
import { SesionDTO } from 'src/app/modelo/sesion-dto';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  sesion: SesionDTO;
  constructor(private authService:AuthService) {
    this.sesion = new SesionDTO('', '', '');
  }

  public login() {
    this.authService.login(this.sesion).subscribe({
      next: data =>{
        console.log(data.respuesta);
      },
      error: err =>{

      },
    })
  }
}
