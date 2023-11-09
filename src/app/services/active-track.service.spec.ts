import { TestBed } from '@angular/core/testing';

import { ActiveTrackService } from './active-track.service';

describe('ActiveTrackService', () => {
  let service: ActiveTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
