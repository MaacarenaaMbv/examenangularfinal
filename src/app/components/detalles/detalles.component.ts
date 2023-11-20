import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Cubo } from 'src/app/models/cubo';
import { ServiceCubo } from 'src/app/services/service.cubo';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{
  public cubo!: any;
  constructor(private _service: ServiceCubo, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    const idCubo = this.route.snapshot.params['id'];
    this._service.getCubosId(idCubo).subscribe(result => {
      this.cubo = result;
    })
  }
}
