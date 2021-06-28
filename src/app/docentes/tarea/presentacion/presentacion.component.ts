import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPresentaciones} from 'src/app/interfaces/presentaciones';
import {PresentacionesService} from 'src/app/services/presentaciones.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss'],
})
export class PresentacionComponent implements OnInit {
  isloaded:boolean = false;
  dataSource:IPresentaciones[];

  alumnoPresentacion:IPresentaciones;
  tamanoLista:number;
  idPresentacion:number;


  constructor(private route: ActivatedRoute,
    private presentacionesService: PresentacionesService,
    private router2:Router) {


  }


  ngOnInit() {
    this.presentacionesService.getPresentaciones().subscribe((res) =>{
      if (res) {
        this.isloaded = true;
        console.log(res);
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.idPresentacion = id;

        this.dataSource = res;
        this.tamanoLista = res.length;
        this.alumnoPresentacion = res[this.idPresentacion-1];
      }
    });
  }


  go(instruccion:string) {
    let idIr = 0;
    if (instruccion ==='atras') {
      idIr = this.idPresentacion-1 == 0 ?
      this.dataSource.length : this.idPresentacion -1;
    } else {
      idIr = this.idPresentacion==this.dataSource.length?
      this.dataSource[0].id : this.idPresentacion+1;
    }

    this.router2.navigate(['/docente/tarea/presentacion', idIr]);
  }
}
