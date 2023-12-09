import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.css']
})
export class CrudUsersComponent {

  users: any[] = [];
  constructor(private db: FirebaseService ,private router: Router) {

  }


  ngOnInit(): void {
    this.getUsers();
  }


  async getUsers() {
    this.users = await this.db.getDocuments("users")
  }


  async delUser(id: string) {
    await this.db.deleteDocument('users', id); //remove firebase
    this.users = this.users.filter((usr)=> usr.id !== id);//remove local array
  }



  async  updateUser(user: any) {
    // Navigate to another component and pass the product data as a query parameter
    this.router.navigate(['/updateUsers'], { queryParams: { user: JSON.stringify(user) } });
  }

  async addUser(){
    this.router.navigate(['/updateUsers']);

  }
}

