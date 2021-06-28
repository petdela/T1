import {Component} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage {
  constructor(private toastController: ToastController) { }

  async avisoUnion() {
    const toast = await this.toastController.create({
      message: 'Te has unido al grupo',
      duration: 2000,
    });
    toast.present();
  }
}
