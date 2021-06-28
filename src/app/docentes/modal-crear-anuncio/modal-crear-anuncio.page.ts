import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-crear-anuncio',
  templateUrl: './modal-crear-anuncio.page.html',
  styleUrls: ['./modal-crear-anuncio.page.scss'],
})
export class ModalCrearAnuncioPage implements OnInit {
  @Input() titulo: any;
  @Input() actividad: any;

  selectedTitle='';
  selectedDescription='';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarCrearAnuncio() {
    this.modalCtrl.dismiss({
      titulo: this.selectedTitle,
      descripcion: this.selectedDescription,
    });
  }

  public capturarTitulo( event: any ) {
    // this.selectedTitle=event.detail.value;
  }

  public capturarDescrip( event: any ) {
    // this.selectedDescription=event.detail.value;
  }

  public cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
