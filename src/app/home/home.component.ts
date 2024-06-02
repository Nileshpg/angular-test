import { Component, OnInit } from "@angular/core";
import { ROUTE_PATH } from "../Constants/constants";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  constructor(

    private router: Router,
  ) {}

  ngOnInit() {
   
  }
  goTo() {
    this.router.navigate([ROUTE_PATH.DASHBOARD]);
  }



}
