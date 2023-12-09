import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css']
})
export class TopThreeProductsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 220,

    },
    title: {
      text: 'أكثر 3 منتجات مبيعاً'
    },
    xAxis: {
      categories: [
        'حذاء OZELIA',
        'حذاء NMD_R1 PRIMEBLUE',
        'ULTRABOOST 22 حذاء',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'حذاء OZELIA',
          y: 395,
          color: '#044342',
        },
        {
          name: 'حذاء NMD_R1 PRIMEBLUE',
          y: 385,
          color: '#7e0505',
        },
        {
          name: 'ULTRABOOST 22 حذاء',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
