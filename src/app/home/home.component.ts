import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
  registerForm: FormGroup;
  modalInstance: any;
  showModal: boolean = false;
  isSubmitted = false;
  selectedAge: number = 20;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private Utility: UtilityService
  ) {}

  ngOnInit() {
    this.formInit();
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
    });
  }
  get form() {
    return this.registerForm.controls;
  }

  closeModal() {
    this.isSubmitted = false;
    this.registerForm.reset();
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
        state: this.registerForm.controls["state"].value,
        country: this.registerForm.controls["country"].value,
        address: this.registerForm.controls["address"].value,
        newsletter: this.registerForm.controls["newsletter"].value,
      };

      const response: any = await this.authService.addRegister(obj);

      if (response) {
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
}
