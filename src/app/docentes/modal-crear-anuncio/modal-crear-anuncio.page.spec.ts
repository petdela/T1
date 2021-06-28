import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ModalCrearAnuncioPage} from './modal-crear-anuncio.page';

describe('ModalCrearAnuncioPage', () => {
  let component: ModalCrearAnuncioPage;
  let fixture: ComponentFixture<ModalCrearAnuncioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCrearAnuncioPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCrearAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
