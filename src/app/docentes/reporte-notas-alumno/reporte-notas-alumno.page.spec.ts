import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ReporteNotasAlumnoPage} from './reporte-notas-alumno.page';

describe('ReporteNotasAlumnoPage', () => {
  let component: ReporteNotasAlumnoPage;
  let fixture: ComponentFixture<ReporteNotasAlumnoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteNotasAlumnoPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteNotasAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
