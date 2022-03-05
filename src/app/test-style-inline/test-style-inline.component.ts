import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-style-inline',
  templateUrl: './test-style-inline.component.html',
  styles: [
    `h1{color:red}`
  ]
})
export class TestStyleInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
