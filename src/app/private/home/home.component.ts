import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private collections = [
    {
      name: 'Flower Embroidery Shirt',
      author: 'Shein',
      rate: '789',
      img: './../../../assets/images/whiteDress/bitmap.png',
      details: {
        seller: {
          name: 'Mod & Soul',
          subName: 'Boutique',
          address: '',
          followers: '',
          imgList: []
        },
        size: [
          41,
          42,
          43,
          44,
          45
        ]
      },
      likes: {
        number: '',
        userImage: [
          '',
          '',
          ''
        ]
      },
      descripition: 'Blue floral mini dress featuring a smock stretch neckline, short ruffle puff sleeves and a smocked waistline.',
      imgList: []
    },
    {
      name: 'Tabaco Brown Leather Duffle Bag',
      author: 'Capra Leather',
      rate: '1479',
      img: './../../../assets/images/bitmap_2019-05-26 (4)/bitmap.png',
    },
    {
      name: 'Orange Hand Block Printed Cotton Kurta',
      author: 'The Loom',
      rate: '789',
      img: './../../../assets/images/women/bitmap.png',
    }
  ];
  private collections2 = [{
    name: 'Tabaco Brown Leather Duffle Bag',
    author: 'Thursday Boot Company',
    rate: '1479',
    img: './../../../assets/images/redSripes/bitmap.png',
  },
  {
    name: 'Office Style Business Casuals',
    author: 'The Loom',
    rate: '789',
    img: './../../../assets/images/bitmap_2019-05-26 (4)/bitmap.png',
  },
  {
    name: 'Brown Casual Shoes For Men',
    author: 'Thursday Boot Company',
    rate: '789',
    img: './../../../assets/images/blackShirt/bitmap.png',
  }];
  private logo = '../../assets/images/logo/bndlogo@3x.png';
  constructor() { }

  ngOnInit() {
  }

}
