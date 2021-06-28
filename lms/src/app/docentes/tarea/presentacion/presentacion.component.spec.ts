import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {PresentacionComponent} from './presentacion.component';
import {HttpClientModule} from '@angular/common/http';

describe('PresentacionComponent', () => {
  let component: PresentacionComponent;
  let fixture: ComponentFixture<PresentacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PresentacionComponent],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot([]), HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
