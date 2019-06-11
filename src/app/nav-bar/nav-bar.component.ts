import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private menuItems = [
    {
      name: 'Women'
    },
    {
      name: 'Men'
    },
    {
      name: 'Kids'
    },
    {
      name: 'Home & Living'
    },
    {
      name: 'Art'
    },
    {
      name: 'Discover'
    },
    {
      name: 'More'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
