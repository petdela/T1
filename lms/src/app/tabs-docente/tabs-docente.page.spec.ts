import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {TabsDocentePage} from './tabs-docente.page';

describe('TabsDocentePage', () => {
  let component: TabsDocentePage;
  let fixture: ComponentFixture<TabsDocentePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabsDocentePage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
