import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {EntregarTareaPage} from './entregar-tarea.page';
import {RouterModule} from '@angular/router';

describe('EntregarTareaPage', () => {
  let component: EntregarTareaPage;
  let fixture: ComponentFixture<EntregarTareaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EntregarTareaPage],
      imports: [IonicModule.forRoot(), RouterModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EntregarTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
