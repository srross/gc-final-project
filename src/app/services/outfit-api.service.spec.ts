import { TestBed } from '@angular/core/testing';

import { OutfitApiService } from './outfit-api.service';

describe('OutfitApiService', () => {
  let service: OutfitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutfitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
