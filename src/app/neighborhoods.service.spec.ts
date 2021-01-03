import { TestBed } from '@angular/core/testing';

import { NeighborhoodsService } from './neighborhoods.service';

describe('NeighborhoodsService', () => {
  let service: NeighborhoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeighborhoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
