import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';



@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css']
})
export class SalesByMonthComponent implements OnInit {




  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'تدرج المبيعات'
    },
    xAxis: {
      categories: [

      ]
    },
    yAxis: {
      title: {
        text: ' السعر بالجنيه '
      }
    },
    series: [
      {
        name: "رجال",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'نساء',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'أطفال',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
