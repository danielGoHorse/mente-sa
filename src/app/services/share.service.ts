import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private valueSource = new BehaviorSubject<string>('');
  public value = this.valueSource.asObservable();

  constructor() { }

  changeValue(value: string){
    this.valueSource.next(value);
  }
}
