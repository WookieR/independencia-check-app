import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReporteMedidasService } from '../../services/reporte-medidas.service';
import { ReporteMedida } from '../../interfaces/reporte-medida.interface';
import { ModalController } from '@ionic/angular';
import { MedidaEditarComponent } from '../../components/medidas/medida-editar/medida-editar.component';

@Component({
  selector: 'app-reporte-medidas',
  templateUrl: './reporte-medidas.component.html',
  styleUrls: ['./reporte-medidas.component.scss'],
})
export class ReporteMedidasComponent implements OnInit {

  public reporteMedidas: ReporteMedida[];

  private itemId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private reporteMedidasService: ReporteMedidasService,
              public modalController: ModalController ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.itemId = params.id;
    });

    this.reporteMedidasService.getReporteMedidas(this.itemId).subscribe(resp => {
      this.reporteMedidas = resp;
    });
  }

  modificarMedida(medida: ReporteMedida){
    this.presentModal(medida).then(({data}) => {
      if (!data){
        return;
      }

      const index = this.reporteMedidas.findIndex( rm => rm._id === data._id);

      this.reporteMedidas[index] = data;
    });
  }

  async presentModal(reporteInject: ReporteMedida) {
    const modal = await this.modalController.create({
      component: MedidaEditarComponent,
      cssClass: 'my-custom-modal-class',
      componentProps: {
        reporteMedida: reporteInject
      }
    });
    await modal.present();

    return modal.onDidDismiss();
  }



}
