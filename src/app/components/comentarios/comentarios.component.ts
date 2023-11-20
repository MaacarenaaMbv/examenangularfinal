import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ServiceCubo } from 'src/app/services/service.cubo';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit{
  public comentarios!: any;

  constructor(private _service: ServiceCubo, private route: ActivatedRoute){}
  ngOnInit(): void {
    const idCubo = this.route.snapshot.params['id'];
    this._service.getComentariosCubo(idCubo).subscribe(result => {
      this.comentarios = result
    })
  }
  
}
