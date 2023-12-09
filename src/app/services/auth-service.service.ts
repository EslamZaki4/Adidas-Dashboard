import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  Admins: any[] = [];
  isLoginBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLogined);

  constructor(private db: FirebaseService, private fireAuth: AngularFireAuth, private router: Router) {
    this.getAdmins();
  }

  async getAdmins() {
    this.Admins = await this.db.getDocuments("admin");
  }

  // Login
  Login(email: string, password: string) {
    const admin = this.Admins.find(admin => admin.email === email);
    if (admin) {
      this.fireAuth.signInWithEmailAndPassword(email, password).then(
        () => {
          localStorage.setItem('token', 'انت بالفعل قمت بالتسجيل');
          this.isLoginBehavior.next(true);
          this.router.navigate(['./HomePage']);
        },
        (err) => {
          alert('برجاء كتابة كلمة المرور الصحيحة');
          this.router.navigate(['']);
        }
      );
    } else {
      alert('غير مصرح لك بلدخول');
      this.router.navigate(['']);
    }
  }

  // Logout
  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.isLoginBehavior.next(false);
        this.router.navigate(['']);
      },
      (err) => {
        console.error('Logout error', err);
      }
    );
  }

  // Guard
  get isLogined(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  LoginStateChange(): Observable<boolean> {
    return this.isLoginBehavior.asObservable();
  }
}
