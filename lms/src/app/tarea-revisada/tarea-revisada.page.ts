import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tarea-revisada',
  templateUrl: './tarea-revisada.page.html',
  styleUrls: ['./tarea-revisada.page.scss'],
})
export class TareaRevisadaPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salirRetroalimentacion() {
    this.modalController.dismiss();
  }
}
