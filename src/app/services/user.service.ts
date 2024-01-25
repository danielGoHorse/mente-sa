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


  authState$: Observable<firebase.default.User> = this.authFire.authState;

  

  displayName$: Observable<string> = this.authState$.pipe(
    map(user => {
      return !user ? null : user.uid;
    })
  )

  getUserById(id_fire: string){
    const userTest = this.httpCliente.get<UserResponse>(`${this.apiUrl}`+ id_fire)
    return userTest
  }


  // createUser(param: any){
  //   this.httpCliente.post(`${this.apiUrl}criar`, param)
  // }

}
