import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CalificarComponent} from './calificar.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('CalificarComponent', () => {
  let component: CalificarComponent;
  let fixture: ComponentFixture<CalificarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CalificarComponent],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot([]), HttpClientModule],

    }).compileComponents();

    fixture = TestBed.createComponent(CalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
