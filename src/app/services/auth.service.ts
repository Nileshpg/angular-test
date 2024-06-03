import { Injectable } from "@angular/core";
import { API_PATH } from "src/app/Constants/constants";

import { HttpRequestsService } from "./http-requests.service";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private hostUrl = environment.API_URL;

  constructor(
    private http: HttpRequestsService,
    private httpClient: HttpClient
  ) {}

  getUserList = async (id) => {
    return this.http.get(`${API_PATH.REGISTER.ADD_REGISTER}/${id}`);
  };

  addRegister = async (data: any) => {
    return this.http.post(API_PATH.REGISTER.ADD_REGISTER, data);
  };
  getCountries = async () => {
    return this.http.get(API_PATH.ADDRESS.COUNTRIES);
  };
  getCountriesIdByStatesList = async (id) => {
    return this.http.get(`${API_PATH.ADDRESS.COUNTRIES}/${id}`);
  };
  UpdateUsersList = (id: any, data: any) => {
    return this.http.patch(`${API_PATH.REGISTER.ADD_REGISTER}/${id}`, data);
  };
}
