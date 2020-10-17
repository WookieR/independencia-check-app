import { Component, OnInit } from '@angular/core';
import { MaquinasService } from '../../services/maquinas.service';
import { Maquina } from '../../interfaces/maquina.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.scss'],
})
export class MaquinasComponent implements OnInit {

  public maquinas: Maquina[];

  public cargando: boolean;

  constructor(private maquinasService: MaquinasService, private router: Router, private authService: AuthService) {
    this.cargando = true;
  }

  ngOnInit() {
    this.obtenerMaquinas();
  }

  verSectores(maquinaId: string){
    this.router.navigateByUrl(`/sectores/${maquinaId}`);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  obtenerMaquinas(){
    this.cargando = true;
    this.maquinasService.getMaquinas().subscribe( resp => {
      this.cargando = false;
      this.maquinas = resp;
    });
  }

  doRefresh(event){
    this.maquinasService.getMaquinas().subscribe( resp => {
      event.target.complete();
      this.cargando = false;
      this.maquinas = resp;
    });
  }

}
