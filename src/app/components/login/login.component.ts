import { Component, ViewChild, ElementRef} from '@angular/core';
import { ServiceLogin } from 'src/app/services/service.login';
import { Usuario } from 'src/app/models/ususario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("cajaEmail") cajaEmailRef !: ElementRef;
  @ViewChild("cajaContrasenia") cajaContraseniaRef !: ElementRef;

  constructor(private _serviceLogin: ServiceLogin){}

  inicioUsuario(): void {
    var email = this.cajaEmailRef.nativeElement.value;
    var password = this.cajaContraseniaRef.nativeElement.value;
    var newUser = new Usuario(email, password);
    this._serviceLogin.iniciarSesion(newUser).subscribe(response => {
      var token = response.response;
      //Guardar el token en localStorage
      localStorage.setItem('response', token);
      alert("Inicio de sesion correcto")
    },
    error => {
      console.error('Error al iniciar sesión:', error);
      alert("Datos incorrectos. Por favor, revise su correo y contraseña.");
    })
  }
}
