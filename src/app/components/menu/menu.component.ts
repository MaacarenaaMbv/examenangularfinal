import { Component,OnInit } from '@angular/core';
import { ServiceCubo } from 'src/app/services/service.cubo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public marcas!: Array<String>;
  constructor(private _service: ServiceCubo){}
  
  ngOnInit(): void {
    this._service.getMarcas().then(response => {
      this.marcas = response
    })
  }

}
