import { TestBed } from '@angular/core/testing';

import { PeticionesapiService } from './peticionesapi.service';

describe('PeticionesapiService', () => {
  let service: PeticionesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
