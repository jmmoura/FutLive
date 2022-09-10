import { TestBed } from '@angular/core/testing';

import { LiveMatchesService } from './live-matches.service';

describe('LiveMatchesService', () => {
  let service: LiveMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
