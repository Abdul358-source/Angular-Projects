import { TestBed } from '@angular/core/testing';

import { COuntriesService } from './countries.service';

describe('COuntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: COuntriesService = TestBed.get(COuntriesService);
    expect(service).toBeTruthy();
  });
});
