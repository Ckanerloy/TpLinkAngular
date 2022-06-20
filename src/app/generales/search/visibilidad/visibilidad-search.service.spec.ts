import { TestBed } from '@angular/core/testing';

import { VisibilidadSearchService } from './visibilidad-search.service';

describe('VisibilidadSearchService', () => {
  let service: VisibilidadSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
