import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserLogin } from '../model/userLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error: any;

  showTabEmitter = new EventEmitter<boolean>();

  constructor(private auth: AngularFireAuth) { }

  async loginUser(userLogin: UserLogin) {

    try {
      const user = await this.auth.signInWithEmailAndPassword(userLogin.email, userLogin.password);
      if (user) {
        this.showTabEmitter.emit(true)
        return user;
      }
    } catch (error) {
      this.error = error;
      return error;
    }

  }

  async registerUser(email: string, password: string) {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string) {
    return await this.auth.sendPasswordResetEmail(email);
  }

  async singOut() {
    return await this.auth.signOut();
  }

  async getProfile() {
    return await this.auth.currentUser
  }

}
