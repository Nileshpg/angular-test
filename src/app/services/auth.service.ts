import { Injectable } from "@angular/core";
import { API_PATH } from "src/app/Constants/constants";

import { HttpRequestsService } from "./http-requests.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpRequestsService) {}

  getUserList = async (id) => {
    return this.http.get(`${API_PATH.REGISTER.ADD_REGISTER}/${id}`);
  };

  addRegister = async (data: any) => {
    return this.http.post(API_PATH.REGISTER.ADD_REGISTER, data);
  };
}
