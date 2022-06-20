import { TestBed } from '@angular/core/testing';

import { VisibilidadHeaderService } from './visibilidad-header.service';

describe('VisibilidadHeaderService', () => {
  let service: VisibilidadHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
