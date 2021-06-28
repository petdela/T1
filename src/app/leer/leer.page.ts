import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.page.html',
  styleUrls: ['./leer.page.scss'],
})
export class LeerPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salirLeer() {
    this.modalController.dismiss();
  }
}
