import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import {TrabajoService} from '../../services/trabajo.service';
import {ITrabajo} from '../../interfaces/trabajo.interface';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.page.html',
  styleUrls: ['./trabajo.page.scss'],
})
export class TrabajoPage implements OnInit {
  constructor() { }
  trabajo: ITrabajo;
  id:string = '60d56458e83042392c46e289';
  loaded: boolean = false;
  titulo:string;
  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get("id");
    // this.trabajoService.getTrabajo(this.id).subscribe((res)=>{
    //   if(res){
    //     this.trabajo = res;
    //     this.loaded = true;
    //     this.titulo = res.Titulo;
    //     console.log(res);
    //     console.log(res.Titulo);


    //   }
    // });
    const trabajo: ITrabajo = {

      Archivos: [],
      Titulo: 'dcdcd',
      Instrucciones: 'cdcdcdcdcd',
      FechaCreacion: new Date('2021-06-25T05:06:32.163Z'),
      FechaEntrega: new Date('2021-06-26T22:09:00.000Z'),
      Categoria: 'talleres',
      Puntos: 100,
    };
    this.trabajo = trabajo;
    this.loaded = false;
  }
}
