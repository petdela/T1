import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ExploreContainerComponentModule}
  from '../explore-container/explore-container.module';

import {MateriaPage} from './materia.page';

describe('MateriaPage', () => {
  let component: MateriaPage;
  let fixture: ComponentFixture<MateriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaPage],
      imports: [IonicModule.forRoot(),
        ExploreContainerComponentModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
