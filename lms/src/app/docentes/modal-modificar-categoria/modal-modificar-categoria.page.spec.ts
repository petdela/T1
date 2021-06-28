import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ModalModificarCategoriaPage} from './modal-modificar-categoria.page';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

describe('ModalModificarCategoriaPage', () => {
  let component: ModalModificarCategoriaPage;
  let fixture: ComponentFixture<ModalModificarCategoriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModificarCategoriaPage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalModificarCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
