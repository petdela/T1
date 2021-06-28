import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {NewTrabajoPage} from './new-trabajo.page';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('NewTrabajoPage', () => {
  let component: NewTrabajoPage;
  let fixture: ComponentFixture<NewTrabajoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewTrabajoPage],
      imports: [IonicModule.forRoot(), FormsModule,
        ReactiveFormsModule, HttpClientModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
