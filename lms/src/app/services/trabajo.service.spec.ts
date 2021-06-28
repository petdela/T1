import {TestBed} from '@angular/core/testing';

import {TrabajoService} from './trabajo.service';
import {HttpClientModule} from '@angular/common/http';

describe('TrabajoService', () => {
  let service: TrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
