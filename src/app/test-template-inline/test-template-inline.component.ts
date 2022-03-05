import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-template-inline',
  template: `
    <p>
      test-template-inline works!
    </p>
  `,
  styleUrls: ['./test-template-inline.component.css']
})
export class TestTemplateInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
