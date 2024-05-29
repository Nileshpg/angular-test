import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  constructor(private toastr: ToastrService) {}
  public showSpinner = new BehaviorSubject<boolean>(false);

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
