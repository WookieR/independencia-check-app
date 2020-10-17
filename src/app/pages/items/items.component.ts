import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  private sectorId: string;

  public items: Item[];

  public cargando: boolean;

  constructor( private activatedRoute: ActivatedRoute, private itemsService: ItemsService, private router: Router ) {
    this.cargando = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.sectorId = params.id;
    });

    this.itemsService.getItems(this.sectorId).subscribe( resp => {
      this.cargando = false;
      this.items = resp;
    });
  }

  verReporteMedidas(itemId: string){
    this.router.navigateByUrl(`/reporte-medidas/${itemId}`);
  }

}
