import { TestBed } from '@angular/core/testing';

import { DashboardDataProviderService } from './dashboard-data-provider.service';

describe('DashboardDataProviderService', () => {
  let service: DashboardDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
