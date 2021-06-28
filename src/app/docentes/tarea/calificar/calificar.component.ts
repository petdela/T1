import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {PresentacionesService} from '../../../services/presentaciones.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.scss'],
})
export class CalificarComponent implements OnInit {
  dataSource:any;
  constructor(private router:Router,
    private presentacionService: PresentacionesService) {

  }

  ngOnInit() {
    this.presentacionService.getPresentaciones().subscribe((res) =>{
      if (res) {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }
  displayedColumns: string[] =
  ['nombre', 'estado', 'estado_calificacion', 'comentario', 'calificacion']

  tareasEntregadas:number = 0;
  tareasPorEntregar: number = 32;


  applyFilter(filterValue:KeyboardEvent) {
    console.log(filterValue);

    this.dataSource.filter =
    (<HTMLInputElement>filterValue.target).value.trim().toLowerCase();
  }
  getPresentaciones() {
    fetch('../../assets/presentaciones.json').then((res) => res.json())
        .then((json) =>{
          this.dataSource = new MatTableDataSource(json);
        });
  }
  onSelect(id:number) {
    this.router.navigate(['docente/tarea/presentacion', id]);
  }
}
