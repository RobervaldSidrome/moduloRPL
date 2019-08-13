import { TestBed } from '@angular/core/testing';

import { ResponsavelDataService } from './responsavel-data.service';

describe('ResponsavelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsavelDataService = TestBed.get(ResponsavelDataService);
    expect(service).toBeTruthy();
  });
});
