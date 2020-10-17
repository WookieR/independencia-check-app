import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { RespuestaMaquinas } from '../interfaces/maquina.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {

  get token(){
    return localStorage.getItem('token');
  }

  get headers(){

    const headers = {
      headers: {
        'token': this.token
      }
    };
    return headers;
  }

  constructor( private http: HttpClient) { }

  getMaquinas() {
    return this.http.get(`${base_url}/maquina-reporte`, this.headers).pipe(
      map( (resp: RespuestaMaquinas) => {
        return resp.maquinasDb;
      })
    );
  }
}
