import { TestBed } from '@angular/core/testing';

import { PKDataService } from './pk-data.service';

describe('PKDataService', () => {
  let service: PKDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PKDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
