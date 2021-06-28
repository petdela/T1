import {TestBed} from '@angular/core/testing';

import {FilesService} from './files.service';
import {HttpClientModule} from '@angular/common/http';

describe('FilesService', () => {
  let service: FilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
