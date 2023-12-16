import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showTabEmitter = new EventEmitter<boolean>();

  constructor(private afa: AngularFireAuth) { }

  async loginUser(email: string, password: string){

    const user = this.afa.signInWithEmailAndPassword(email,password);
    if(user){
      this.showTabEmitter.emit(true)
      return user;
    }


    
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
