import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RreactiveFormsComponent } from './rreactive-forms.component';

describe('RreactiveFormsComponent', () => {
  let component: RreactiveFormsComponent;
  let fixture: ComponentFixture<RreactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RreactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RreactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
