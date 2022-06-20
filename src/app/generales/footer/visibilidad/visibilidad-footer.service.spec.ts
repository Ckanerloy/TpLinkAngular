import { TestBed } from '@angular/core/testing';

import { VisibilidadFooterService } from './visibilidad-footer.service';

describe('VisibilidadFooterService', () => {
  let service: VisibilidadFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
