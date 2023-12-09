import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {

    this.authService.LoginStateChange().subscribe((loggedIn: boolean) => {
      this.isUserLoggedIn = loggedIn;
    });
  }

  logout() {
    const isTokenAvailable = localStorage.getItem('token') !== null; // تحقق مما إذا كان المفتاح موجودًا

    if (isTokenAvailable) {
      const confirmLogout = confirm('هل أنت متأكد من الخروج؟');
      if (confirmLogout) {
        this.authService.logout();
      }
    }
  }
}


