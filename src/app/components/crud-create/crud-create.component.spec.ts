import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCreateComponent } from './crud-create.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

describe('CRUDCreateComponent', () => {
  let component: CrudCreateComponent;
  let fixture: ComponentFixture<CrudCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CrudCreateComponent,
      NavBarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
