import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-crear-categoria',
  templateUrl: './modal-crear-categoria.page.html',
  styleUrls: ['./modal-crear-categoria.page.scss'],
})
export class ModalCrearCategoriaPage implements OnInit {
  @Input() titulo: any;
  @Input() actividad:any;

  newForm = this.fb.group({
    nombre: ['', [Validators.required]],
    nota: [''],
    isgrupal: [''],

  });
  get nombre() {
    return this.newForm.get('nombre');
  }
  get nota() {
    return this.newForm.get('nota');
  }
  get isgrupal() {
    return this.newForm.get('isgrupal');
  }

  constructor(private modalCtrl: ModalController, private fb:FormBuilder) {

  }

  public errorMessages = {
    nombre: [
      {type: 'required', message: 'El nomdre de la categoria es requerido'},

    ],

  };


  ngOnInit() {}

  cerrarCrearCategoria() {
    this.modalCtrl.dismiss({

    });
  }

  crearCategoria() {

  }
}
