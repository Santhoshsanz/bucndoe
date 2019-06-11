import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  // private logo = require('../../assets/images/logo/bndlogo@3x.png');
  private logo = '../../assets/images/logo/bndlogo@3x.png';
  private searchIcon = '../../assets/images/search/fill-1.png';
  private bellIcon = '../../assets/images/iconNotification/group-3.png';
  private cartIcon = '../../assets/images/iconCart/fill-1.png';
  private chatIcon = '../../assets/images/iconChat/fill-1.png';

  constructor() { }

  ngOnInit() {
  }
}
