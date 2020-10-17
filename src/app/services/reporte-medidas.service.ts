import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { RespuestaReporteMedidas, RespuestaReporteMedida } from '../interfaces/reporte-medida.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ReporteMedidasService {

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

  constructor( private http: HttpClient ) { }

  getReporteMedidas(itemId: string){
    return this.http.get(`${base_url}/reporte-medida/item/${itemId}`, this.headers).pipe(
      map( (resp: RespuestaReporteMedidas) => {
        return resp.reporteMedidas;
      })
    );
  }

  editReporteMedida(medidaId: string, valor: string){
    const data = {
      valor
    };

    return this.http.put(`${base_url}/reporte-medida/${medidaId}`, data, this.headers).pipe(
      map( (resp: RespuestaReporteMedida) => {
        return resp.reporteMedidaDb;
      })
    );
  }
}
