/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShowdialogsService } from './Showdialogs.service';

describe('Service: Showdialogs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowdialogsService]
    });
  });

  it('should ...', inject([ShowdialogsService], (service: ShowdialogsService) => {
    expect(service).toBeTruthy();
  }));
});
