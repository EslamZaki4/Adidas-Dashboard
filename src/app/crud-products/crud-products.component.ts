import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.css']
})
export class CrudProductsComponent implements OnInit {

  products: any[] = [];



  constructor(private db: FirebaseService ,private router: Router) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.db.getDocuments("products")
  }

  async delProduct(id: string) {
    await this.db.deleteDocument('products', id); //remove firebase
    this.products = this.products.filter((prd)=> prd.id !== id);//remove local array
  }

  async  updateProduct(product: any) {
    // Navigate to another component and pass the product data as a query parameter
    this.router.navigate(['/addAndUpdate'], { queryParams: { product: JSON.stringify(product) } });
  }

  async addProduct(){
    this.router.navigate(['/addAndUpdate']);

  }
}
