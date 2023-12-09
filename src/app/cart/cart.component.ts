import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  cartData: any;
  constructor(private db: FirebaseService) {

  }



  async findPrdId(id: string) {
    var prd = await this.db.getDocument('products', id);
    return prd;
  }

  async delCart(email:string ,id: string, size: string) {
    
    var tempCartData  = await this.db.getDocument('cart',email);
    if(tempCartData){
      delete tempCartData[id][size];
    }

     await this.db.updateDocument('cart', email, tempCartData)
      this.getCart()
  }


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

  ngOnInit(): void {
    this.getCart()
  }


}
