import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-redactar',
  templateUrl: './redactar.page.html',
  styleUrls: ['./redactar.page.scss'],
})
export class RedactarPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salirRedactar() {
    this.modalController.dismiss();
  }
}
