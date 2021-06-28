import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {ForosPage} from './foros.page';

describe('ForosPage', () => {
  let component: ForosPage;
  let fixture: ComponentFixture<ForosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ForosPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ForosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
