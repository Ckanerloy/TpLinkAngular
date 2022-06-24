import { TestBed } from '@angular/core/testing';

import { AgregarCuponProveedorService } from './agregar-cupon-proveedor.service';

describe('AgregarCuponProveedorService', () => {
  let service: AgregarCuponProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarCuponProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
