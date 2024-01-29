import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subject, map } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../model/userResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/usuario/`

  constructor(private authFire: AngularFireAuth,
    private httpCliente: HttpClient) { }

  usuario: User
  userSrc: any;

  authState$: Observable<firebase.default.User> = this.authFire.authState;

  

  displayName$: Observable<string> = this.authState$.pipe(
    map(user => {
      return !user ? null : user.uid;
    })
  )

  getUserById(id_fire: string){
    return this.httpCliente.get<UserResponse>(`${this.apiUrl}`+ id_fire)
  }

  registerUser(param: any) {
    return this.httpCliente.post<User>(`${this.apiUrl}criar`, param)
  }


  sendForm(form: any) {
    this.userSrc = form;
  }

  public getForm(): any {
    return this.userSrc;
  }

}
