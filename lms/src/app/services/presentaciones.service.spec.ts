import {TestBed} from '@angular/core/testing';

import {PresentacionesService} from './presentaciones.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('PresentacionesService', () => {
  let service: PresentacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PresentacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
