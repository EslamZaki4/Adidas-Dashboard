import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.css']
})
export class LastFewTransactionsComponent implements OnInit {

  transactions = [
    {
      id: 1,
      title: "STAN SMITH 80S SHOES",
      price: "Egp 9,999.00",
      shop: "Tech Pro",
      location: "East Hartford",
      status: "pending",
      imgSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/a2ac2b284188429a8ef9af5e01059bf7_9366/IF0202_01_standard.jpg"
    },
    {
      id: 2,
      title: "MULTI LINEAR SPORTSWEAR ",
      price: "Egp 1,079.40",
      shop: "Pick the best",
      location: "Miamisburg",
      status: "shipped",
      imgSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/b4e3006acb554a98b572af2e0115d6c4_9366/HS2523_21_model.jpg"
    },
    {
      id: 3,
      title: "EEZAY FLIP-FLOPS",
      price: "ُEgp 1,229.00",
      shop: "Quality Leathers",
      location: "Phoenix",
      status: "confirmed",
      imgSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/285fe0844331471aa34bab2001047c3e_9366/EG2041_01_standard.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
