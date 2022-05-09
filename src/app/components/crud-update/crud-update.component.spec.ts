import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDUpdateComponent } from './crud-update.component';

describe('CRUDUpdateComponent', () => {
  let component: CRUDUpdateComponent;
  let fixture: ComponentFixture<CRUDUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
