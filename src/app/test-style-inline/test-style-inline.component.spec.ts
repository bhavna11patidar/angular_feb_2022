import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStyleInlineComponent } from './test-style-inline.component';

describe('TestStyleInlineComponent', () => {
  let component: TestStyleInlineComponent;
  let fixture: ComponentFixture<TestStyleInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStyleInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStyleInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
