import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectoresService } from '../../services/sectores.service';
import { Sector } from '../../interfaces/sector.interface';

@Component({
  selector: 'app-sectores',
  templateUrl: './sectores.component.html',
  styleUrls: ['./sectores.component.scss'],
})
export class SectoresComponent implements OnInit {

  private maquinaid: string;

  public sectores: Sector[];

  public cargando: boolean;

  constructor( private activatedRoute: ActivatedRoute, private sectoresService: SectoresService, private router: Router ) {
    this.cargando = true;
  }

  ngOnInit() {
    this.cargando = true;

    this.activatedRoute.params.subscribe( params => {
      this.maquinaid = params.id;
    });

    this.sectoresService.getSectores(this.maquinaid).subscribe( resp => {
      this.cargando = false;
      this.sectores = resp;
    });
  }

  verItems(sectorId: string){
    this.router.navigateByUrl(`/items/${sectorId}`);
  }

  volverMaquinas(){
    this.router.navigateByUrl(`/maquinas`);
  }

}
