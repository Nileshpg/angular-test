import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../Constants/constants';
import { UtilityService } from '../services/utility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showModal: boolean = false;


  constructor(
    private router: Router,
    private utility: UtilityService,


  ) { }

  ngOnInit() {
  }
  login(){  
    console.log("==working===>");
    this.router.navigate([ROUTE_PATH.LOGIN]);
  }
  


  onModalOpen() {
    console.log("===22222222===");
    this.showModal = true;
  }

 



}
