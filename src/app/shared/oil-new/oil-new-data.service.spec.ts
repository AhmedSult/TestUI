import { TestBed } from '@angular/core/testing';

import { OilNewDataService } from './oil-new-data.service';

describe('OilNewDataService', () => {
  let service: OilNewDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OilNewDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
