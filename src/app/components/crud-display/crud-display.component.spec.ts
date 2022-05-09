import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDDisplayComponent } from './crud-display.component';

describe('CRUDDisplayComponent', () => {
  let component: CRUDDisplayComponent;
  let fixture: ComponentFixture<CRUDDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
