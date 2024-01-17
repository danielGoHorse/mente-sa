import { TestBed } from '@angular/core/testing';

import { MedicalContactService } from './medical-contact.service';

describe('MedicalContactService', () => {
  let service: MedicalContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
