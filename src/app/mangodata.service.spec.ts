import { TestBed, inject } from '@angular/core/testing';

import { MangodataService } from './mangodata.service';

describe('MangodataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MangodataService]
    });
  });

  it('should be created', inject([MangodataService], (service: MangodataService) => {
    expect(service).toBeTruthy();
  }));
});
