import {Injectable} from '@angular/core'; 
import {Observable} from 'rxjs'; 
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 
import { Usuario } from '../models/ususario';

@Injectable()

export class ServiceLogin {
    constructor(private _http: HttpClient){}
    iniciarSesion(usuario: Usuario): Observable<any>{
        var json = JSON.stringify(usuario)
        var headers = new HttpHeaders({
            "Content-type": "application/json",
        });
        var request = "api/manage/login";
        var url = environment.urlApiCubos + request;
        return this._http.post(url, json, {headers});
    }
}