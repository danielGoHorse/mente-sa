import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  async loginUser(email: string, password: string){
    return this.afa.signInWithEmailAndPassword(email,password);
  }
  
  async registerUser(email: string, password: string){
    return await this.afa.createUserWithEmailAndPassword(email,password);
  }

  async resetPassword(email: string){
    return await this.afa.sendPasswordResetEmail(email);
  }
  
  async singOut(){
   return await this.afa.signOut();
  }

  async getProfile(){
    return await this.afa.currentUser
  }

}
