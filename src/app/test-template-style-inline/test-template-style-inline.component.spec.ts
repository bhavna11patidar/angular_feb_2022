import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateStyleInlineComponent } from './test-template-style-inline.component';

describe('TestTemplateStyleInlineComponent', () => {
  let component: TestTemplateStyleInlineComponent;
  let fixture: ComponentFixture<TestTemplateStyleInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTemplateStyleInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTemplateStyleInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
