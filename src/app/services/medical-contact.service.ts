import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MedicalContact } from '../model/medical-contact';
import { MedicalResponse } from '../model/MedicalResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalContactService {

  private medContact: MedicalContact;
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/contatoMedico/`

  constructor(
    private httpCliente: HttpClient,
  ) { }

  getMedicalContact() {
    return this.httpCliente.get(this.apiUrl).pipe(
      map(res => {
        this.medContact = res;
        return this.medContact;
      })
    )
  }

  createMedicalContact(param: any){

  }
}
