import { TestBed, inject } from '@angular/core/testing';

import { Heroes2Service } from './heroes2.service';

describe('Heroes2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Heroes2Service]
    });
  });

  it('should be created', inject([Heroes2Service], (service: Heroes2Service) => {
    expect(service).toBeTruthy();
  }));
});
