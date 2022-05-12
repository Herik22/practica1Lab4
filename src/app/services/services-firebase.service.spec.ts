import { TestBed } from '@angular/core/testing';

import { ServicesFirebaseService } from './services-firebase.service';

describe('ServicesFirebaseService', () => {
  let service: ServicesFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
