import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {TrabajoPage} from './trabajo.page';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('TrabajoPage', () => {
  let component: TrabajoPage;
  let fixture: ComponentFixture<TrabajoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TrabajoPage],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot([]), HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
