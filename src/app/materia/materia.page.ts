import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TareaRevisadaPage} from '../tarea-revisada/tarea-revisada.page';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.page.html',
  styleUrls: ['./materia.page.scss'],
})
export class MateriaPage {
  constructor(private modalController: ModalController) { }

  async mostrarRetroalimentacion() {
    const modal = await this.modalController.create({
      component: TareaRevisadaPage,
    });

    await modal.present();
  }
}
