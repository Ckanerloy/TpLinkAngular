import { TestBed } from '@angular/core/testing';

import { VisibilidadNavService } from './visibilidad-nav.service';

describe('VisibilidadNavService', () => {
  let service: VisibilidadNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
