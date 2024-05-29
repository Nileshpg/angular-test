import { Injectable } from "@angular/core";
import { API_PATH } from "src/app/Constants/constants";
import { BehaviorSubject, Observable, from, of } from "rxjs";
// import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { HttpRequestsService } from "./http-requests.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private hostUrl = environment.API_URL;
  constructor(
    private http: HttpRequestsService,
    // private localstorage: LocalStorageService,
    private httpClient: HttpClient
  ) {}

  // public isAuthenticated(): boolean {
  //   return !!this.localstorage.getLocalStore(LOCAL_STORAGE_KEYS.IS_LOGIN);
  // }

  // addUser = async (data: any) => {
  //   return this.http.post(API_PATH.USER.USER_ADD, data);
  // };
  // getUserList = async (queryList: any) => {
  //   return this.http.get(API_PATH.USER.USER_ADD + queryList);
  // };
  // userDelete = async (id: any) => {
  //   return this.http.delete(`${API_PATH.USER.USER_ADD}/${id}`);
  // };
  // getByIdUsersList = async (id: any) => {
  //   return this.http.get(`${API_PATH.USER.USER_ADD}/${id}`);
  // };
  // UpdateUserList = async (id: any, data: any) => {
  //   return this.http.patch(
  //     `${API_PATH.USER.USER_ADD}/${id}`,
  //     data
  //   );
  // };
  addRegister = async (data: any) => {
    return this.http.post(API_PATH.REGISTER.ADD_REGISTER, data);
  };
  // getBlogList = async (queryList: any) => {
  //   return this.http.get(API_PATH.USER.ADD_BLOG + queryList);
  // };
  // blogDelete = async (id: any) => {
  //   return this.http.delete(`${API_PATH.USER.ADD_BLOG}/${id}`);
  // };
  // getUsers() {
  //   return this.httpClient.get(`${this.hostUrl}${API_PATH.USER.USER_ADD}`)
  // }
  // addUsers(data: any) {
  //   return this.httpClient.post(`${this.hostUrl}${API_PATH.USER.USER_ADD}`, data)

  // }
  // usersDelete(data: any) {
  //   return this.httpClient.delete(`${this.hostUrl}${API_PATH.USER.USER_ADD}/${data.id}`)
  // }
  // UpdateUsersList = (id: any, data: any) => {
  //   return this.httpClient.patch(`${this.hostUrl}${API_PATH.USER.USER_ADD}/${id}`, data)

  // }

  // getCountries() {
  //   const language = "English";
  //   return this.http.get(
  //     `https://secure.geonames.org/countryInfoJSON?lang=${language}&username=ahii`
  //   );
  // }
}
