import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { RespuestaSectores } from '../interfaces/sector.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SectoresService {

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

  constructor(private http: HttpClient) { }

  getSectores(maquinaId: string){
    return this.http.get(`${base_url}/sector-reporte/${maquinaId}`, this.headers).pipe(
      map( (resp: RespuestaSectores) => {
        return resp.sectoresDb;
      })
    );
  }
}
