import { Component, OnInit } from '@angular/core';
import { Cubo } from "../../models/cubo"; 
import { ServiceCubo } from 'src/app/services/service.cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public cubos!: Array<Cubo>;
  constructor(private _service: ServiceCubo){}

  ngOnInit(): void {
    this._service.getCubos().then(response => {
      this.cubos = response
    })
  }

}
