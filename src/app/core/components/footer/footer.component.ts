import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      developed by
      <a href="https://nikson.dev/" target="_blank" rel="noopener">nikson</a>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
