import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-template-style-inline',
  template: `
    <h2>
      test-template-style-inline works!
    </h2>
  `,
  styles: [
    `h2{color:blue;}`
  ]
})
export class TestTemplateStyleInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
