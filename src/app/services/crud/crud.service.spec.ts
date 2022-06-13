import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('CRUDService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ]});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
