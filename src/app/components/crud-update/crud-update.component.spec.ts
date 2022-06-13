import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateComponent } from './crud-update.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

describe('CRUDUpdateComponent', () => {
  let component: CrudUpdateComponent;
  let fixture: ComponentFixture<CrudUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule
      ],
      declarations: [ CrudUpdateComponent,
      NavBarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
