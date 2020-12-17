/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShowmessagesService } from './Showmessages.service';

describe('Service: Showmessages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowmessagesService]
    });
  });

  it('should ...', inject([ShowmessagesService], (service: ShowmessagesService) => {
    expect(service).toBeTruthy();
  }));
});
