import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDisplayComponent } from './crud-display.component';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";

describe('CRUDDisplayComponent', () => {
  let component: CrudDisplayComponent;
  let fixture: ComponentFixture<CrudDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule
      ],
      declarations: [ CrudDisplayComponent,
      NavBarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
