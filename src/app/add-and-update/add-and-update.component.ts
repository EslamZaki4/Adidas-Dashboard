import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-and-update',
  templateUrl: './add-and-update.component.html',
  styleUrls: ['./add-and-update.component.css']
})



export class AddAndUpdateComponent implements OnInit {
  product: any;
  productForm!: FormGroup;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: FirebaseService,
    private formBuilder: FormBuilder
  ) { }








  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['product']) {
        this.product = JSON.parse(params['product']);
        this.initialize_updateForm();
      } else {
      var prdstr = {
        category: "",
        details: [],
        gender: "",
        imgurl: [''],
        availablestock: [''],
        alternative: [''],
        arcategory: "",
        availablesize: [''],
        size: [''],
        color: "",
        description: "",
        oldprice: 0,
        price: 0,
        quantity: 0,
        headline: "",
        name: ""
      }
        this.product = JSON.parse(JSON.stringify(prdstr));

        this.initialize_AddForm();
      }
    });
  }



  initialize_updateForm() {

    this.productForm = this.formBuilder.group({
      name: [this.product.name],
      price: [this.product.price],
      quantity: [this.product.quantity],
      availablesize: [this.product.availablesize],
      headline: [this.product.headline],
      color: [this.product.color],
      imgurl: [this.product.imgurl],
      description: [this.product.description],
      details: [this.product.details],
      category: [this.product.category],
      gender : [this.product.gender]

    });


  }



  initialize_AddForm() {

    this.productForm = this.formBuilder.group({
      name: '',
      price: '',
      quantity: '',
      availablesize: [],
      headline: '',
      color: '',
      imgurl: [],
      description: '',
      details: [],
      category: '',
      gender : ''
    });

    // this.productForm.get('productForm.gender')?.setValue(this.product.gender);
  }

  randomNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  async UpdateProduct2(id: string = "") {

    if (id) {


      try {
        var data = { ...this.productForm.value };

        await this.db.updateDocument("products" ,id, data);
        alert('تم التعديل بنجاح');
        this.router.navigate(['/crudproducts']);

      } catch (error) {
        console.error('Error updating document:', error);
      }

    } else {


      var data = { ...this.productForm.value };

      data.alternative = [];
      data.arcategory = data.category;

      data.details = data.details.includes(',') ? data.details.split(",") : [data.details]
      data.availablesize = data.availablesize.includes(',') ? data.availablesize.split(",") : [data.availablesize]
      data.imgurl =  data.imgurl.includes(',') ?  data.imgurl.split(",") : [data.imgurl];

      data.size = data.availablesize;

       data.availablestock = data.size;
       data.availablestock = data.availablestock.map((s:any) => this.randomNum());

      data.oldprice = 0;


      await this.db.createDocument('products', data)
      alert('تم اضافة المنتج بنجاح');
      this.router.navigate(['/crudproducts']);
    }



  }

}
