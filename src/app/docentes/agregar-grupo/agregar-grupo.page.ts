import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-agregar-grupo',
  templateUrl: './agregar-grupo.page.html',
  styleUrls: ['./agregar-grupo.page.scss'],
})
export class AgregarGrupoPage implements OnInit {
  students=[];
  groups=['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4'];
  people=['Melanie Banchon', 'William Medina',
    'Sebastian Mendoza', 'Edwards Sabando'];
  array=[];
  studentsByGroup={};

  lengthStudentsByGr=0;
  selectedGroup='';
  selectedPerson='';


  constructor() { }

  ngOnInit() {
  }

  selectGroup(event: any) {
    this.selectedGroup=event.target.value;

    console.log('grupo--> '+this.selectedGroup);
  }

  onClick(event: any) {
    this.selectedPerson=event.target.innerText;
    console.log(this.selectedPerson);
    const members=[];
    if (this.selectedGroup!=='') {
      this.array.forEach((e)=>{
        console.log('foreach');

        if (this.selectedGroup == e.group) {
          members.push(this.selectedPerson);
          this.array.push({
            group: this.selectedGroup,
            students: members,
            membersNumber: members.length,
          });
          console.log('grupo existe');
        } else {
          members.push(this.selectedPerson);
          this.array.push({
            group: this.selectedGroup,
            students: members,
            membersNumber: members.length,
          });
          console.log('grupo nuevo');
        }
      });
      console.log(this.array);
    } else {
      alert('Seleccione un grupo');
    }


    /* if(this.selectedPerson!="" && this.selectedGroup!=""){
      if(this.selectedGroup in this.studentsByGroup){
        this.studentsByGroup[this.selectedGroup].push(this.selectedPerson);
        this.lengthStudentsByGr=this.studentsByGroup[this.selectedGroup].length
        console.log('grupo existe')
        console.log(this.studentsByGroup)
      }else{
        this.studentsByGroup[this.selectedGroup]=[];
        this.studentsByGroup[this.selectedGroup].push(this.selectedPerson);
        this.lengthStudentsByGr=this.studentsByGroup[this.selectedGroup].length
        console.log('grupo nuevo')
        console.log(this.studentsByGroup)
      }
    }*/


    /* studentsByG debe ser un diccionario
    en donde la clave es la materia y el valor es
      una lista de estudiantes
      studentByGroup={'Grupo1':[Melanie,William]}*/

    // this.lengthStudentsByGr=Object.keys(this.studentsByGroup).length;
    // this.lengthStudentsByGr=this.studentsByGroup[this.selectedGroup].length
  }
}
