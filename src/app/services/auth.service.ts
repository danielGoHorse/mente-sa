import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserLogin } from '../model/userLogin';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  error: any;

  showTabEmitter = new EventEmitter<boolean>();
  userCurrent: firebase.User;

  constructor(private auth: AngularFireAuth) { }

  async loginUser(email: string, password: string) {
    try {
      const credencial = await this.auth.signInWithEmailAndPassword(email, password);
   
      this.user = credencial.user;
      return this.user
      // if (user) {
      //   this.showTabEmitter.emit(true)
      //   return user;
      // }
    } catch (error) {
      this.error = error;
      // return error;
    }

  }

  async googleSignin(){
    
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credencial = await this.auth.signInWithPopup(provider);
      this.user = credencial.user;
      
    } catch (error) {
      this.error = error;
      // return error;
    }
  }


  registerUser(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  async resetPassword(email: string) {
    return await this.auth.sendPasswordResetEmail(email);
  }

  singOut() {
    this.user = null;
    this.auth.signOut();
    
  }

  async getProfile() {
    return await this.auth.currentUser
  }

}
