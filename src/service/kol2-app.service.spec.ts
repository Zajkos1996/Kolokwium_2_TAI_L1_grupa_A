import { TestBed } from '@angular/core/testing';

import { Kol2AppService } from './kol2-app.service';

describe('Kol2AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Kol2AppService = TestBed.get(Kol2AppService);
    expect(service).toBeTruthy();
  });
});
