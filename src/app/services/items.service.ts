import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaItems } from '../interfaces/item.interface';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

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

  getItems(sectorId: string){
    return this.http.get(`${base_url}/item-reporte/${sectorId}`, this.headers).pipe(
      map( (resp: RespuestaItems) => {
        return resp.itemsDb;
      })
    );
  }
}
