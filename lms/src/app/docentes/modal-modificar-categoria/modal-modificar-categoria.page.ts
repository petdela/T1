import {Input} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-modificar-categoria',
  templateUrl: './modal-modificar-categoria.page.html',
  styleUrls: ['./modal-modificar-categoria.page.scss'],
})
export class ModalModificarCategoriaPage implements OnInit {
  @Input() titulo:any;
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

  modificarCategoria() {
    console.log(this.newForm.value);
  }
}
