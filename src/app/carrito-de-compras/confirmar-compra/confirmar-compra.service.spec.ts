import { TestBed } from '@angular/core/testing';

import { ConfirmarCompraService } from './confirmar-compra.service';

describe('ConfirmarCompraService', () => {
  let service: ConfirmarCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmarCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
