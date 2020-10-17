import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/usuario.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public Usuario: Usuario;

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

  login(email: string, password: string){
    const data = {
      email,
      password
    };

    return this.http.post(`${base_url}/login`, data).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  validarToken(){
    return this.http.get(`${base_url}/renew`, this.headers).pipe(
      map( (resp:any) => {
        this.Usuario = resp.usuario;
        localStorage.setItem('token', resp.token);
        return true;
      }),
      catchError ( err => of(false) )
    );
  }

  logout(){
    localStorage.removeItem('token');
    this.Usuario = null;
  }


}
