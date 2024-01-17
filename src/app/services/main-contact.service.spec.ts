import { TestBed } from '@angular/core/testing';

import { MainContactService } from './main-contact.service';

describe('MainContactService', () => {
  let service: MainContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
