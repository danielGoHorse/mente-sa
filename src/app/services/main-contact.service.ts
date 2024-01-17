import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainContactService {

  private urlApi = 'http://localhost:9092/demo/'

  constructor() { }
}
