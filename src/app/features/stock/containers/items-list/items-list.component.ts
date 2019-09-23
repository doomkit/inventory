import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  template: `
   <p>
  		items-list Works!
   </p>
  `,
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
