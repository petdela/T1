import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalCrearAnuncioPage}
  from '../modal-crear-anuncio/modal-crear-anuncio.page';
import {ModalCrearCategoriaPage}
  from '../modal-crear-categoria/modal-crear-categoria.page';
import {ModalModificarCategoriaPage}
  from '../modal-modificar-categoria/modal-modificar-categoria.page';

@Component({
  selector: 'app-crear-anuncio',
  templateUrl: './crear-anuncio.page.html',
  styleUrls: ['./crear-anuncio.page.scss'],
})
export class CrearAnuncioPage implements OnInit {
  ocultar=false;
  anuncios= [
    {'titulo': 'ACTIVIDAD DE PRÓXIMA SEMANA',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
    {'titulo': 'PROYECTO PARCIAL',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
    {'titulo': 'DUDAS SOBRE LA TAREA',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
  ]

  deberes=[
    {'titulo': 'Analizar video',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
    {'titulo': 'Ideas principales',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
  ];

  talleres=[
    {'titulo': 'Taller 1',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
    {'titulo': 'Taller 2',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
  ];

  materiales= [
    {'titulo': 'Libros',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
    {'titulo': 'Diapositivas',
      'descripcion': 'Loren Ipsum sit amet, consectetur adiscipling elit.'},
  ]
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async modalCrearAnuncio() {
    console.log('crear anuncio');
    const modal= await this.modalCtrl.create({
      component: ModalCrearAnuncioPage,
      componentProps: {
        titulo: 'Crear Anuncio',
        actividad: 'crear',
      },
    });
    await modal.present();
    // const {data}= await modal.onDidDismiss();
  }

  async modalCrearTrabajo() {
    console.log('crear anuncio');
    const modal= await this.modalCtrl.create({
      component: ModalCrearAnuncioPage,
      componentProps: {
        titulo: 'Crear Trabajo',
        actividad: 'crear',
      },
    });
    await modal.present();
    // const {data}= await modal.onDidDismiss();
  }

  async modalCrearMaterial() {
    console.log('crear anuncio');
    const modal= await this.modalCtrl.create({
      component: ModalCrearAnuncioPage,
      componentProps: {
        titulo: 'Crear Material',
        actividad: 'crearMaterial',
      },
    });
    await modal.present();
    // const {data}= await modal.onDidDismiss();
  }

  async modalModificarAnuncio() {
    console.log('modificar anun');

    const modal= await this.modalCtrl.create({
      component: ModalCrearAnuncioPage,
      componentProps: {
        titulo: 'Modificar Anuncio',
        actividad: 'modificar',
      },
    });
    await modal.present();
  }

  async modalModificarTrabajo() {
    const modal= await this.modalCtrl.create({
      component: ModalCrearAnuncioPage,
      componentProps: {
        titulo: 'Modificar Trabajo',
        actividad: 'modificar',
      },
    });
    await modal.present();
  }

  async modalModificarMaterial() {
    const modal= await this.modalCtrl.create({
      component: ModalCrearAnuncioPage,
      componentProps: {
        titulo: 'Modificar Material',
        actividad: 'modificar',
      },
    });
    await modal.present();
  }

  async abrirModalCategoria() {
    const modal = await this.modalCtrl.create({
      component: ModalCrearCategoriaPage,
      componentProps: {
        titulo: 'Crear categoria',
        actividad: 'crear',
      },
    });
    await modal.present();
  }
  async abrirModalModificarCategoria() {
    const modal = await this.modalCtrl.create({
      component: ModalModificarCategoriaPage,
      componentProps: {
        titulo: 'Modificar Categoria',
        actividad: 'modificar',
      },
    });
    await modal.present();
  }

  ocultarItem() {
    this.ocultar=true;
  }
}
