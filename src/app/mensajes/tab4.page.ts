import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {RedactarPage} from '../redactar/redactar.page';
import {LeerPage} from '../leer/leer.page';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  constructor( private modalController: ModalController) { }

  async redactarMensaje() {
    const modal = await this.modalController.create({
      component: RedactarPage,
    });

    await modal.present();
  }

  async leerMensaje() {
    const modal = await this.modalController.create({
      component: LeerPage,
    });

    await modal.present();
  }
}
