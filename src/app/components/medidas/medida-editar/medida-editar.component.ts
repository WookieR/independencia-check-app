import { Component, Input, OnInit } from '@angular/core';
import { ReporteMedida } from '../../../interfaces/reporte-medida.interface';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReporteMedidasService } from '../../../services/reporte-medidas.service';

@Component({
  selector: 'app-medida-editar',
  templateUrl: './medida-editar.component.html',
  styleUrls: ['./medida-editar.component.scss'],
})
export class MedidaEditarComponent implements OnInit {

  public valorForm: FormGroup;

  public cargando: boolean;

  @Input() reporteMedida: ReporteMedida;

  constructor( private modalCtrl: ModalController, private fb: FormBuilder, private reporteMedidas: ReporteMedidasService) {
    this.cargando = false;
  }

  ngOnInit() {
    this.valorForm = this.fb.group({
      valor: [this.reporteMedida.valor, [], []]
    });
  }

  ok(){
    const valor = this.valorForm.get('valor').value;

    this.cargando = true;

    this.reporteMedidas.editReporteMedida(this.reporteMedida._id, valor).subscribe( resp => {
      this.cargando = false;
      this.modalCtrl.dismiss(resp);
    });
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
