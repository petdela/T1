import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ReporteNotasMateriaPage} from './reporte-notas-materia.page';

describe('ReporteNotasMateriaPage', () => {
  let component: ReporteNotasMateriaPage;
  let fixture: ComponentFixture<ReporteNotasMateriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteNotasMateriaPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteNotasMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
