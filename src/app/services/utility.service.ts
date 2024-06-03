import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IndividualConfig, ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  constructor(private toastr: ToastrService) {}
  public showSpinner = new BehaviorSubject<boolean>(false);
  public userEditId: BehaviorSubject<any> = new BehaviorSubject(null);

  public get getUserIdValue() {
    return this.userEditId.asObservable();
  }
  public userUpdateMethod = new BehaviorSubject<boolean>(false);

  public get getUserUpdateMethod() {
    return this.userUpdateMethod.asObservable();
  }

  public userId = null;
  showError(message: string) {
    this.toastr.error(message);
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }

  show() {
    this.showSpinner.next(true);
  }

  hide() {
    this.showSpinner.next(false);
  }
}
