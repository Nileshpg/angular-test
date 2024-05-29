import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  profileList: "";

  constructor(
    private authService: AuthService,
    private Utility: UtilityService
  ) {}

  ngOnInit() {
    this.getList();
  }
  async getList() {
    const response: any = await this.authService.getUserList(
      this.Utility.userId
    );
    if (response) {
      this.profileList = response;
    }
  }
}
