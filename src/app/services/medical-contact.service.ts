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

  getMainContact(): Observable<MedicalResponse<MedicalContact[]>> {
    return this.httpCliente.get<MedicalResponse<MedicalContact[]>>(this.apiUrl);
  }

  getAllMainContact(): Observable<MedicalContact> {
    return this.httpCliente.get(this.apiUrl).pipe(
      map((res: any) => {
        this.medContact = res;
        return this.medContact;

      })
    )
  }

  getMed(){
    return this.httpCliente.get(this.apiUrl).pipe(
      map(res => {
        this.medContact = res;
        console.log("this.medContact",this.medContact)
        return this.medContact;
     

      })
    )
    }
}
