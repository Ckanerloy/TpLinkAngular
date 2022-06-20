import { TestBed } from '@angular/core/testing';

import { VisibilidadRolService } from './visibilidad-rol.service';

describe('VisibilidadRolService', () => {
  let service: VisibilidadRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
