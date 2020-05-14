import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService{
  public url:string;

  constructor(private _http: HttpClient){
    this.url = global.url;
  }

  prueba(){
    return "Hola";
  }

  register(user): Observable<any> {

    //convertir el objeto a un jsostring
    let params = JSON.stringify(user);

    //cabeceras
    let headers = new HttpHeaders().set('Content-type','application/json');

    //peticion ajax
    return this._http.post(this.url+'register',params,{headers:headers});
  }


}
