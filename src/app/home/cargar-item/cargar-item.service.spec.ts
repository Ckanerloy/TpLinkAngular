import { TestBed } from '@angular/core/testing';

import { CargarItemService } from './cargar-item.service';

describe('CargarItemService', () => {
  let service: CargarItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
