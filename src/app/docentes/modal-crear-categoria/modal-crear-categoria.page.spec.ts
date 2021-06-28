import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ModalCrearCategoriaPage} from './modal-crear-categoria.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ModalCrearCategoriaPage', () => {
  let component: ModalCrearCategoriaPage;
  let fixture: ComponentFixture<ModalCrearCategoriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCrearCategoriaPage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCrearCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
