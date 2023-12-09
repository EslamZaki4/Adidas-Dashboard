import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {

  faAreaChart,
  faBoxes,
  faLocation,
  faMoneyBill,
  faShop,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent implements OnInit {
  wishlistData: any[] = [];
  totalItemsInWishlist: number = 0;
  products: any[] = [];
  cart: any[] = [];
  cartData: any;
  constructor(private db: FirebaseService) {

  }

  //get Cart
  async getCart() {
    this.cartData = await this.db.getDocuments("cart");
    const newarr: any[] = [];

    for (let i = 0; i < this.cartData.length; i++) {

      const email = this.cartData[i]

      var emailname = email.id;
      delete email.id;

      if (Object.keys(email).length <= 1) continue;

      Object.keys(email).map(id =>
        Object.keys(email[id]).map(size => {
          const item = {
            id: id,
            qty: email[id][size].qty,
            size: size,
            email: emailname
          }

          newarr.push(item)
        }

        )
      )






    }
console.log('this cart '  , newarr)
    this.cart = newarr
  }

//get Wishlist
  async getWishlist() {

    this.wishlistData = await this.db.getDocuments("wishlist")
    this.totalItemsInWishlist = this.calculateTotalItems();



  }
  calculateTotalItems(): number {

    let totalItems = 0;
    this.wishlistData.forEach(item => {
      totalItems += item.fav.length;
    });
    return totalItems;
  }

  //get Products
  async getProducts() {
    this.products = await this.db.getDocuments("products");
    console.log(this.products);


  }



  ngOnInit(): void {
    this.getCart()
    this.getWishlist()
    this.getProducts()
  }


  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faAreaChart=faAreaChart;



}
