import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user: any;
  userForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: FirebaseService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['user']) {
        this.user = JSON.parse(params['user']);
        this.initialize_updateForm();
      } else {
        const usrstr = {
          firstname: "",
          lastname: "",
          email: "",
          gender: "",
        };
        this.user = { ...usrstr };

        this.initialize_AddForm();
      }
    });
  }

  initialize_updateForm() {
    this.userForm = this.formBuilder.group({
      firstname: [this.user.firstname],
      lastname: [this.user.lastname],
      email: [this.user.email],
      gender: [this.user.gender],
    });
  }

  initialize_AddForm() {
    this.userForm = this.formBuilder.group({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
    });
  }

  async UpdateUser2(id: string = "") {
    if (id) {
      try {
        var data = { ...this.userForm.value };
        await this.db.updateDocument("users", id, data);
        alert('تم التعديل بنجاح');
        this.router.navigate(['/crudUsers']);
      } catch (error) {
        console.error('Error updating document:', error);
      }
    } else {
      var data = { ...this.userForm.value };
      await this.db.createDocument('users', data)
      alert('تم اضافة المستخدم بنجاح');
      this.router.navigate(['/crudUsers']);
    }
  }
}
