import { TestBed, inject } from '@angular/core/testing';

import { IdRoleService } from './id-role.service';

describe('IdRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdRoleService]
    });
  });

  it('should be created', inject([IdRoleService], (service: IdRoleService) => {
    expect(service).toBeTruthy();
  }));
});
