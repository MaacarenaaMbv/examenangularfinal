import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import  {environment} from './../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ServiceCubo {
    constructor(private _http: HttpClient) {}
    
    getCubos():  Promise<any> {
        var request = "api/Cubos";
        var url = environment.urlApiCubos + request;
        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe((response)=> {
                resolve(response)
            })
        })
        return promise
    }

    getMarcas(): Promise<any> {
        var request = "api/Cubos/Marcas";
        var url = environment.urlApiCubos + request;
        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe((response)=> {
                resolve(response)
            })
        })
        return promise
    }

    findCubosMarca(marca: string): Observable<any>{
        var request = "/api/Cubos/CubosMarca/" + marca;
        var url = environment.urlApiCubos + request;
        return this._http.get(url)
    }

    getCubosId(idCubo: number){
        var request = "/api/Cubos/" + idCubo;
        var url = environment.urlApiCubos + request;
        return this._http.get(url)
    }

    getComentariosCubo(idCubo: number){
        var request = "/api/ComentariosCubo/GetComentariosCubo/" + idCubo;
        var url = environment.urlApiCubos + request;
        return this._http.get(url)
    }
}