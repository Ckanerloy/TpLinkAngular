import { TestBed } from '@angular/core/testing';

import { InsertarProductoService } from './insertar-producto.service';

describe('InsertarProductoService', () => {
  let service: InsertarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
