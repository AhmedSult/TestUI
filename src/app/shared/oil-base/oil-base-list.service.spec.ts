import { TestBed } from '@angular/core/testing';

import { OilBaseListService } from './oil-base-list.service';

describe('OilBaseListService', () => {
  let service: OilBaseListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OilBaseListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
