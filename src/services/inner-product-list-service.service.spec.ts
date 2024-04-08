import { TestBed } from '@angular/core/testing';

import { InnerProductListServiceService } from './inner-product-list-service.service';

describe('InnerProductListServiceService', () => {
  let service: InnerProductListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnerProductListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
