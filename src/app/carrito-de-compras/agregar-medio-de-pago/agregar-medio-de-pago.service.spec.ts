import { TestBed } from '@angular/core/testing';

import { AgregarMedioDePagoService } from './agregar-medio-de-pago.service';

describe('AgregarMedioDePagoService', () => {
  let service: AgregarMedioDePagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarMedioDePagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
