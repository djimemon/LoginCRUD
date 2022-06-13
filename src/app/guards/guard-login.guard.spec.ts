import { TestBed } from '@angular/core/testing';

import { GuardLoginGuard } from './guard-login.guard';
import {RouterTestingModule} from "@angular/router/testing";

describe('GuardLoginGuard', () => {
  let guard: GuardLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(GuardLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
