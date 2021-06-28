import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AlertController, ToastController} from '@ionic/angular';
import {IArchivos, ITrabajo} from 'src/app/interfaces/trabajo.interface';
import {FilesService} from 'src/app/services/files.service';
import {TrabajoService} from '../../services/trabajo.service';

@Component({
  selector: 'app-new-trabajo',
  templateUrl: './new-trabajo.page.html',
  styleUrls: ['./new-trabajo.page.scss'],
})
export class NewTrabajoPage implements OnInit {
  checked:boolean = false;
  listaArchivos:IArchivos[] = [];
  files: File[] = [];
  get titulo() {
    return this.newForm.get('titulo');
  }
  get instrucciones() {
    return this.newForm.get('instrucciones');
  }
  get fechaEntrega() {
    return this.newForm.get('fechaEntrega');
  }
  get horaEntrega() {
    return this.newForm.get('horaEntrega');
  }
  get categoria() {
    return this.newForm.get('categoria');
  }
  get puntos() {
    return this.newForm.get('puntos');
  }
  get fechaCierre() {
    return this.newForm.get('fechaCierre');
  }

  get horaCierre() {
    return this.newForm.get('horaCierre');
  }
  cambiar() {
    this.checked = !this.checked;
  }
  public errorMessages = {
    titulo: [
      {type: 'required', message: 'Titulo es requerido'},

    ],
    instrucciones: [
      {type: 'required', message: 'Instrucciones son requeridas'},

    ],
    fecha_entrega: [
      {type: 'required', message: 'Fecha de vencimiento requerido'},
    ],
    hora_entrega: [
      {type: 'required', message: 'Fecha de vencimiento requerido'},
    ],
    categoria: [
      {type: 'required', message: 'Eliga una categoria'},
    ],

  };


  newForm = this.fb.group({
    titulo: ['', [Validators.required]],
    instrucciones: ['', [Validators.required]],
    puntos: ['', []],
    fechaEntrega: ['', [Validators.required]],
    horaEntrega: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    fechaCierre: [''],
    horaCierre: [''],

  });
  categorias:string[] = [

  ]
  constructor(private fb:FormBuilder, private _fileSvc: FilesService,
    private alertCtrnl: AlertController,
    private toastController: ToastController,
    private trabjServ: TrabajoService) { }

  ngOnInit() {}

  onNew =async ()=>{
    let dateCierre:any;
    await this.onUpload();
    console.log(this.newForm.value);
    const date = this.getDate(this.fechaEntrega, this.horaEntrega);

    if (this.fechaCierre.value && this.horaCierre.value) {
      dateCierre = this.getDate(this.fechaCierre, this.horaCierre);

      if (date.getTime() > dateCierre.getTime()) {
        this.presentAlert();
        return;
      }
    }

    const presentacion = this.getPresentacion(date);
    if (this.fechaCierre.value && this.horaCierre) {
      presentacion['FechaHoraCierre'] = dateCierre;
    }

    console.log(presentacion['FechaCreacion'].toLocaleString(

    ));

    this.trabjServ.postTrabajo(presentacion).subscribe( (response) => {
      if (response) {
        console.log('exito');

        console.log(response);
      }
    });
    console.log(presentacion);
    this.setearDefecto();
    this.presentToast();
  }
  setearDefecto() {
    const defaultForm = {
      titulo: '',
      instrucciones: '',
      puntos: '',
      fechaEntrega: '',
      horaEntrega: '',
      categoria: '',
      fechaCierre: '',
      horaCierre: '',
    };
    this.newForm.setValue(defaultForm);
    this.files = [];
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Trabajo creado correctamente',
      duration: 2000,
    });
    toast.present();
  }
  getPresentacion(date:Date) {
    const presentacion :ITrabajo = {
      Titulo: this.titulo.value,
      Instrucciones: this.instrucciones.value,
      FechaCreacion: new Date(),
      FechaEntrega: date,
      Categoria: this.categoria.value,
      Puntos: this.puntos.value,
      Archivos: this.listaArchivos,
    };
    return presentacion;
  }
  async presentAlert() {
    const alert = await this.alertCtrnl.create({
      header: 'Alerta',
      message: 'La fecha y hora de entrega no puede ser mayor a la de cierre',
      buttons: ['OK'],
    });
    await alert.present();
  }
  getDate(fecha:AbstractControl, hora:AbstractControl) {
    const date = new Date(fecha.value);
    const str2 : string = hora.value;
    date.setHours(parseInt(str2.slice(0, 2), 10));
    date.setMinutes(parseInt(str2.slice(3, 5), 10));
    // let formattedDate = moment(date.toISOString()).toDate()
    // console.log(formattedDate);
    console.log(date);

    return date;
  }


  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
onUpload = async () =>{
  if (this.files[0]) {
    const data = new FormData();
    for (let i=0; i<this.files.length; i++) {
      data.append('file', this.files[i]);
      data.append('upload_preset', 'zmkcjitt');
      data.append('cloud_name', 'dx0aez2fh');
      const response = await (this._fileSvc.uploadFiles(data)).toPromise();

      if (response) {
        console.log(response);
        const archivo: IArchivos = {
          Nombre: this.files[i].name,
          Tipo: this.files[i].type,
          Link: response.secure_url,

        };
        this.listaArchivos.push(archivo);
      }
    }
  } return;
}
}

