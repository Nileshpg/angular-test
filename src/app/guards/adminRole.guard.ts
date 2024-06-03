import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UtilityService } from "../services/utility.service";
import { ROUTE_PATH } from "../Constants/constants";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class adminGuard {
  constructor(
    private router: Router,
    private utility: UtilityService,
    private auth: AuthService
  ) {}

  async canActivate() {
    if (this.utility.userId) {
      const userRole: any = await this.auth.getUserList(this.utility.userId);
      console.log("====>", userRole);

      if (userRole) {
        return true;
      }
      this.router.navigate([ROUTE_PATH.ABSOLUTE]);
      return false;
    }
    this.router.navigate([ROUTE_PATH.ABSOLUTE]);
    this.utility.showError("user not found");
  }
}
