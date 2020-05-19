/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitToolService } from './GitTool.service';

describe('Service: GitTool', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitToolService]
    });
  });

  it('should ...', inject([GitToolService], (service: GitToolService) => {
    expect(service).toBeTruthy();
  }));
});
