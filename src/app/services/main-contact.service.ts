import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainContact } from '../model/main-contact';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainContactService {

  private mainContact: MainContact;
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/contato_principal/`

  constructor(
    private httpCliente: HttpClient,
  ) { }

  getMainContact() {
    return this.httpCliente.get(`${this.apiUrl}consultaContatoPrincipal`).pipe(
      map(res => {
        this.mainContact = res;
        return this.mainContact;
      })
    )
  }

  createMainContact(param: any){
    this.httpCliente.post(`${this.apiUrl}criar`, param)
  }
}
