import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ServiceCubo } from 'src/app/services/service.cubo';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent implements OnInit{
  public cubos!: Array<Cubo>;
  constructor(private _service: ServiceCubo, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    const marca = this.route.snapshot.params['marca'];
    this._service.findCubosMarca(marca).subscribe(result => {
      this.cubos = result
    })
  }
}
