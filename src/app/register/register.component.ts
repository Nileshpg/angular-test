import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegexEnum } from "src/app/Constants/regex";
import { AuthService } from "src/app/services/auth.service";
import { UtilityService } from "src/app/services/utility.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  base64Image: string | ArrayBuffer | null = null;
  profileList: any = [];
  registerForm: FormGroup;
  modalInstance: any;
  showModal: boolean = false;
  isSubmitted = false;
  selectedAge: number = 20;
  tags = [];
  countriesList: any = [];
  statesList: any = [];
  @Input() editId: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private Utility: UtilityService
  ) {}

  async ngOnInit() {
    this.formInit();
    this.getCountries();
  }

  async ngOnChanges(changes: SimpleChanges) {
    this.Utility.getUserIdValue.subscribe(async (data) => {
      this.editId = data;
      if (changes["editId"] && this.editId) {
        await this.getList();
        this.setValue();
        await this.getCountries();
      }
    });
  }

  formInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(RegexEnum.email)]],
      phone: ["", [Validators.required, Validators.pattern(RegexEnum.mobile)]],
      age: ["20", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      address: ["", [Validators.required]],
      newsletter: [""],
      tagInput: ["", [Validators.required]],
    });
  }
  get form() {
    return this.registerForm.controls;
  }

  closeModal() {
    this.isSubmitted = false;
    this.registerForm.reset();
    this.base64Image = "";
    this.tags = [];
    // this.editId = undefined;
    this.Utility.userEditId.next(null);
  }

  async onSubmit() {
    try {
      this.isSubmitted = true;
      this.registerForm.controls["tagInput"].setValue(this.tags);

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
        tagInput: this.registerForm.controls["tagInput"].value,
      };
      let response;
      if (this.editId) {
        response = await this.authService.UpdateUsersList(this.editId, obj);
      } else {
        response = await this.authService.addRegister(obj);
      }

      if (response) {
        this.editId = response.id;
        this.Utility.userId = response.id;
        this.Utility.userUpdateMethod.next(true);
        this.Utility.showSuccess("Data Added Successfully");
        const modal = document.querySelector(".reg") as HTMLButtonElement;
        if (modal) {
          modal.click();
        }
        this.closeModal();
      }
    } catch (error) {
      console.log("error");

      this.Utility.showError("No Data found");
    }
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
  async getCountries() {
    const response: any = await this.authService.getCountries();
    if (response) {
      this.countriesList = response;
    }
  }
  async getstates(event) {
    this.registerForm.controls["state"].patchValue("");

    let response;
    if (this.editId) {
      response = await this.authService.getCountriesIdByStatesList(
        this.profileList.country_id
      );
    } else {
      response = await this.authService.getCountriesIdByStatesList(
        event.target.value
      );
    }
    if (response) {
      this.statesList = response.states;
    }
  }

  addTag() {
    const tagInputControl = this.registerForm.controls["tagInput"];
    const newTag = tagInputControl.value.trim();

    if (newTag && !this.tags.includes(newTag)) {
      this.tags.push(newTag);
      tagInputControl.reset();
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter((t) => t !== tag);
  }
  async getList() {
    try {
      const response: any = await this.authService.getUserList(this.editId);
      if (response) {
        this.profileList = response;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  setValue() {
    this.base64Image = this.profileList.profileImgae;
    this.getstates(this.profileList.country_id);
    this.registerForm.patchValue({
      firstName: this.profileList.firstName,
      lastName: this.profileList.lastName,
      email: this.profileList.email,
      phone: this.profileList.phoneNumber,
      age: this.profileList.age,
      state: this.profileList.state_id,
      country: this.profileList.country_id,
      address: this.profileList.address,
      newsletter: this.profileList.newsletter,
      profileImgae: this.base64Image,
    });
    this.tags = this.profileList.tagInput;
  }
}
