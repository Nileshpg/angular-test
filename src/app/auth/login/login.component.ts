import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTE_PATH } from 'src/app/Constants/constants';
import { RegexEnum } from 'src/app/Constants/regex';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  showPassword = true;

  constructor(private formBuilder: FormBuilder,
    private utility: UtilityService,
    private router: Router,
    private authService: AuthService,

  ) {
   
  }
  ngOnInit(): void {
    this.formInt()
  }



  formInt(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(RegexEnum.passwordValidation)]]
    });

  }

  get form() {
    return this.loginForm.controls;
  }
  async login() {
    // this.submitted = true;

    // if (this.loginForm.invalid) {
    //   return;
    // }


    this.utility.show()

    try {
      this.submitted = true;
      if (this.loginForm.valid) {
        let queryList = `?email=${this.loginForm.value["email"]}&password=${this.loginForm.value['password']}`;
        const rep: any = await this.authService.login(queryList);
        if (rep.length > 0) {

          this.utility.showSuccess('Welcome');
          // this.localstorage.setLocalStore(
          //   LOCAL_STORAGE_KEYS.IS_LOGIN,
          //   true
          // );
          // this.localstorage.setLocalStore(
          //   LOCAL_STORAGE_KEYS.ROLE,
          //   rep[0].role
          // );
          // this.localstorage.setLocalStore(
          //   LOCAL_STORAGE_KEYS.ID,
          //   rep[0].id
          // );

          this.router.navigate([`/` + ROUTE_PATH.DASHBOARD]);
        } else {
          this.utility.showError('Not Found')
        }


        this.submitted = false;
      }
    } catch (err) {
      this.submitted = false;
    }


  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

 

}
