import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private banner = 'url(../../assets/images/bottomBg/bitmap.png)';
  constructor() { }

  ngOnInit() {
  }

}
