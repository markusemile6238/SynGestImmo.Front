import { TestBed } from '@angular/core/testing';

import { UserUtilityService } from './user-utility-service';

describe('UserUtilityService', () => {
  let service: UserUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
