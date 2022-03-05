import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateInlineComponent } from './test-template-inline.component';

describe('TestTemplateInlineComponent', () => {
  let component: TestTemplateInlineComponent;
  let fixture: ComponentFixture<TestTemplateInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTemplateInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTemplateInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
