import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(
    private localstorageService: LocalStorageService
  ) { }
  public showSpinner = new BehaviorSubject<boolean>(false);

 

 

  show() {
    this.showSpinner.next(true);
  }

  hide() {
    this.showSpinner.next(false);
  }





}
