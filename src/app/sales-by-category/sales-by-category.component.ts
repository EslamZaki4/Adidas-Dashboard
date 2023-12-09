import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css']
})
export class SalesByCategoryComponent implements OnInit {
  products: any[] = [];
  chart: Chart;

  constructor(private db: FirebaseService) {
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 325
      },
      title: {
        text: 'النسبه المئويه لأقسام المنتجات'
      },
      xAxis: {
        categories: [
          'الرجال',
          'النساء',
          'الأطفال',

        ]
      },
      yAxis: {
        title: {
          text: 'Revenue in %'
        }
      },
      series: [
        {
          type: 'pie',
          data: []
        }
      ],
      credits: {
        enabled: false
      }
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.db.getDocuments("products");
    console.log(this.products);

    this.updateChart();
  }

  updateChart() {
    const totalProducts = this.products.length;

    const menProducts = this.products.filter(product => product.gender === 'الرجال');
    const womenProducts = this.products.filter(product => product.gender === 'النساء');
    const childrenProducts = this.products.filter(product => product.gender === 'الأطفال');

    const menPercentage = (menProducts.length / totalProducts)  *  100;
    console.log(menPercentage);
    const womenPercentage = (womenProducts.length / totalProducts) * 100;
    console.log(womenPercentage);
    const childrenPercentage = (childrenProducts.length / totalProducts) * 100;
    console.log(childrenPercentage);
    this.chart.removeSeries(0);


     this.chart.addSeries(
    {
      type: 'pie',
      data: [
        {
          name: 'الرجال',
          y: menPercentage,
          color: '#F26800',
        },
        {
          name: 'النساء',
          y: womenPercentage,
          color: '#262626',
        },
        {
          name: 'الأطفال',
          y: childrenPercentage,
          color: '#A6A6A6',
        },
      ]
    },
    true,
    true
  );
  }
}
