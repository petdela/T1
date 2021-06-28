import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ExporterService} from 'src/app/services/exporter.service';
import {IEstudiante} from 'src/app/interfaces/estudiantes';


@Component({
  selector: 'app-reporte-notas-materia',
  templateUrl: './reporte-notas-materia.page.html',
  styleUrls: ['./reporte-notas-materia.page.scss'],
})
export class ReporteNotasMateriaPage implements OnInit {
  dataSource:any;
  estudiantes :IEstudiante[]=[];
  tabla:any;
  displayedColumns = [];
  subjects=[];
  selectedSubject='';
  // element-> estudiantes que se muestran en la tabla
  element=[];
  columnNames = [
    {id: 'nombres', value: 'Nombres'},
    {id: 'tarea1', value: 'Tarea 1'},
    {id: 'tarea2', value: 'Tarea 2'},
    {id: 'leccion1', value: 'Leccion 1'},
    {id: 'leccion2', value: 'Leccion 2'},
    {id: 'proyecto', value: 'Proyecto'},
    {id: 'final', value: 'Final'}];

  constructor(private exportService: ExporterService) { }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map((x) => x.id);
    fetch('./assets/reporte-notas-alumno.json').then((res) => res.json())
        .then((json) => {
          console.log(json);

          this.estudiantes=json;

          json.forEach((e:any) => {
            if (!this.subjects.includes(e.materia)) {
              console.log(e.materia);

              this.subjects.push(e.materia);
            }
          // this.students.push(e.nombres);
          });
        });
    console.log('init');
    console.log(this.subjects);
  }

  selectSubject(event: any) {
    this.element=[];
    this.selectedSubject=event.target.value;
    this.estudiantes.forEach((e) => {
      if (this.selectedSubject==e.materia) {
        this.element.push({'nombres': e.nombres,
          'materia': e.materia,
          'tarea1': e.tarea1,
          'tarea2': e.tarea2,
          'leccion1': e.leccion1,
          'leccion2': e.leccion2,
          'proyecto': e.proyecto,
          'final': e.final});
        this.dataSource=new MatTableDataSource(this.element);
      }
    });
  }

  reset() {
    this.selectedSubject='';
  }

  exportAsXLSX() {
    this.exportService.exportToExcel(this.dataSource.data,
        'reporte_notas_'+this.selectedSubject);
  }
}
