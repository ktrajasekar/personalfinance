import { TestBed, inject } from '@angular/core/testing';

import { MongodataService } from './mongodata.service';

describe('MongodataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongodataService]
    });
  });

  it('should be created', inject([MongodataService], (service: MongodataService) => {
    expect(service).toBeTruthy();
  }));
});
