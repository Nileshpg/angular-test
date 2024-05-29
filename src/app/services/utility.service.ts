import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(
    private localstorageService: LocalStorageService,
    private toastr: ToastrService
  ) { }
  public showSpinner = new BehaviorSubject<boolean>(false);

  showError(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  showSuccess(message: string, title?: string) {
    this.toastr.success(message, title);
  }

 

  show() {
    this.showSpinner.next(true);
  }

  hide() {
    this.showSpinner.next(false);
  }





}
