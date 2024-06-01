import { Component, OnInit } from "@angular/core";
import { ROUTE_PATH } from "../Constants/constants";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegexEnum } from "../Constants/regex";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { UtilityService } from "../services/utility.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  base64Image: string | ArrayBuffer | null = null;

  registerForm: FormGroup;
  modalInstance: any;
  showModal: boolean = false;
  isSubmitted = false;
  selectedAge: number = 20;
  sports: string[] = ["Football", "Basketball", "Tennis", "Cricket"];
  countriesList :any =[]
  statesList:any=[]
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private Utility: UtilityService
  ) {}

  ngOnInit() {
    this.formInit();
    this.getCountries()
  }

  formInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(RegexEnum.email)]],
      phone: ["", [Validators.required, Validators.pattern(RegexEnum.mobile)]],
      age: [20, [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      address: ["", [Validators.required]],
      newsletter: ["", [Validators.required]],
      profileImgae: ["", [Validators.required]],
      tag: ["", [Validators.required]],
    });
  }
  get form() {
    return this.registerForm.controls;
  }

  closeModal() {
    this.isSubmitted = false;
    this.registerForm.reset();
    this.base64Image = "";
  }

  async onSubmit() {
    try {
      this.isSubmitted = true;

      if (this.registerForm.invalid) {
        return;
      }

      const obj = {
        firstName: this.registerForm.controls["firstName"].value,
        lastName: this.registerForm.controls["lastName"].value,
        email: this.registerForm.controls["email"].value,
        phoneNumber: this.registerForm.controls["phone"].value,
        age: this.registerForm.controls["age"].value,
        state_id: this.registerForm.controls["state"].value,
        country_id: this.registerForm.controls["country"].value,
        address: this.registerForm.controls["address"].value,
        newsletter: this.registerForm.controls["newsletter"].value,
        profileImgae: this.base64Image,
        tag: this.registerForm.controls["tag"].value,
      };

      const response: any = await this.authService.addRegister(obj);

      if (response) {
        this.Utility.userId = response.id;
        this.Utility.showSuccess("Data Added Successfully");
        const modal = document.querySelector(".reg") as HTMLButtonElement;
        if (modal) {
          modal.click();
        }
        this.closeModal();
      }
    } catch (error) {
      this.Utility.showError("No Data found");
    }
  }
  goTo() {
    this.router.navigate([ROUTE_PATH.DASHBOARD]);
  }

  handleFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const result = e.target.result;
        if (typeof result === "string") {
          this.base64Image = result;
        } else {
          console.error("Unexpected result type:", typeof result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
    }
  }
  async getCountries(){
    const response: any = await this.authService.getCountries();
    if(response){
      this.countriesList =response
    }
  }
  async getcountryId(event){
  this.registerForm.controls["state"].patchValue ("")
  const response: any = await this.authService.getCountriesIdByStatesList(event.target.value);
  if(response){
    this.statesList=response.states 
  }
  }

}
