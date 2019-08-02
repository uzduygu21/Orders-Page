import { TestBed } from '@angular/core/testing';

import { ManageOrdersService } from './manage-orders.service';

describe('ManageOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageOrdersService = TestBed.get(ManageOrdersService);
    expect(service).toBeTruthy();
  });
});
