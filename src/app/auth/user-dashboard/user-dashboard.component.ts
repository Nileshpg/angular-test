import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  profileList:any=[];
  countriesList=[]
  statesList=[]
  selectedUserId: number | null = null;
  isEditing: boolean = false;


  constructor(
    private authService: AuthService,
    private Utility: UtilityService
  ) {}

  ngOnInit() {
    this.getList();
  }
  async getList() {
    try{
      
      const response: any = await this.authService.getUserList(
        this.Utility.userId
      );
      if (response) {
        this.profileList =response
        await this.getCountries()
       await this.getstates(this.profileList.country_id)
       
  
const matchingCountry = this.countriesList.filter(country => {
  return country.id == this.profileList.country_id;
});

if (matchingCountry.length > 0) {
  this.profileList.country_name = matchingCountry[0].country_name;
}

const matchingState = this.statesList.filter(state => {
  return state.id == this.profileList.state_id;
});

if (matchingState.length > 0) {
  this.profileList.state_name = matchingState[0].state_name;
}
      }
    }catch(error){
      console.log("error",error);
      

    }
  }

  async getCountries(){
    const response: any = await this.authService.getCountries();
    if(response){
      this.countriesList =response
    }
  }
  async getstates(id){
  const response: any = await this.authService.getCountriesIdByStatesList(id);
  if(response){
    this.statesList=response.states 
  }
  }
 
  editProfile(userId: number): void {
    this.selectedUserId = userId;
    this.isEditing = true;
  }
  




}
