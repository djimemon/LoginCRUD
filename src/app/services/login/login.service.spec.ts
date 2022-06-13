import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should login', () => {
    service.login("testUser")
    expect(service.getLoggedUser).toBeDefined();
  });

  it('should logout', () => {
    service.login("testUser")
    service.logout()
    let logedUser = service.getLoggedUser();
    expect(logedUser).toBeNull();
  });

  it('user should exist', function () {
    let testUsername = "admin";
    let testPassword = "admin";
    service.users =   [
      { id: 0, name: "admin", password: "admin" }
    ]
    expect(service.checkUser(testUsername, testPassword)).toBeTruthy();
  });

  it('user shouldn`t exist', function () {
    let testUsername = "test";
    let testPassword = "test";
    service.users =   [
      { id: 0, name: "admin", password: "admin" }
    ]
    expect(service.checkUser(testUsername, testPassword)).toBeFalsy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
