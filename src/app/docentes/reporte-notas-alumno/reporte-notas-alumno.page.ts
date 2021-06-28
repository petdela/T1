// import { Component, OnInit } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ExporterService} from 'src/app/services/exporter.service';
import {IEstudiante} from 'src/app/interfaces/estudiantes';


@Component({
  selector: 'app-reporte-notas-alumno',
  templateUrl: './reporte-notas-alumno.page.html',
  styleUrls: ['./reporte-notas-alumno.page.scss'],
})
export class ReporteNotasAlumnoPage implements OnInit {
  dataSource: any;
  estudiantes :IEstudiante[]=[];
  tabla:any;
  displayedColumns = [];
  // subjects=['Lenguaje extranjero',
  // 'Religion','Economia','Teologia 1','Teologia 2'];
  subjects=[];
  students=[];
  selectedSubject='';
  selectedStudent='';

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [
    {id: 'nombres', value: 'Nombres'},
    {id: 'tarea1', value: 'Tarea 1'},
    {id: 'tarea2', value: 'Tarea 2'},
    {id: 'leccion1', value: 'Leccion 1'},
    {id: 'leccion2', value: 'Leccion 2'},
    {id: 'proyecto', value: 'Proyecto'},
    {id: 'final', value: 'Final'}];

  constructor(private exportService: ExporterService) {
  }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map((x) => x.id);

    fetch('./assets/reporte-notas-alumno.json').then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.estudiantes=json;
          // this.dataSource= new MatTableDataSource(this.estudiantes);

          // console.log("dataSource-> "+this.dataSource);
          console.log('estudiantes-> '+this.estudiantes);

          json.forEach((e) => {
            if (!this.subjects.includes(e.materia)) {
              console.log(e.materia);

              this.subjects.push(e.materia);
            }
          });
        });
    console.log('init');
    console.log(this.subjects);
    console.log(this.students);
  }

  selectSubject(event: any) {
    this.students=[];
    this.selectedStudent='';
    this.selectedSubject=event.target.value;
    this.estudiantes.forEach((e) => {
      if (this.selectedSubject==e.materia ) {
        this.students.push(e.nombres);
      }
    });
    console.log('estudiantes-> '+this.students);
  }

  selectStudent(event: any) {
    this.selectedStudent=event.target.value;
    console.log('estudiante seleccionada-> '+this.selectedStudent);
    this.estudiantes.forEach((e) => {
      if (this.selectedSubject==e.materia && this.selectedStudent==e.nombres) {
        const element=[{'nombres': e.nombres,
          'materia': e.materia,
          'tarea1': e.tarea1,
          'tarea2': e.tarea2,
          'leccion1': e.leccion1,
          'leccion2': e.leccion2,
          'proyecto': e.proyecto,
          'final': e.final}];
        this.dataSource= new MatTableDataSource(element);
        // this.tabla= new MatTableDataSource(element);
      }
    });
  }

  reset() {
    this.selectedStudent = '';
    this.selectedSubject='';
  }

  exportAsXLSX() {
    this.exportService.exportToExcel(this.dataSource.data,
        'reporte_notas_'+this.selectedStudent);
  }
}

