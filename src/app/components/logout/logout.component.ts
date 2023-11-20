import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  cerrarSesion(): void {
    localStorage.removeItem('response')
    alert("Sesion cerrada correctamente")
  }
}
