import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDCreateComponent } from './crud-create.component';

describe('CRUDCreateComponent', () => {
  let component: CRUDCreateComponent;
  let fixture: ComponentFixture<CRUDCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
