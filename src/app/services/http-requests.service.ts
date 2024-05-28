import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  private hostUrl = environment.API_URL;
  constructor(
    public http: HttpClient,
    private router: Router,
    private utility: UtilityService

  ) { }





  post(
    url: string,
    body: any,

  ) {
    return new Promise(async (resolve, reject) => {

      this.http
        .post(`${this.hostUrl}${url}`, body)
        .pipe(map((res) => res))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err);
            reject(err);
          }
        );
    });
  }


  get(
    url: string,
  ) {
    return new Promise(async (resolve, reject) => {

      let response = this.http
        .get(`${this.hostUrl}${url}`)
        .pipe(map((res) => res));

      response.subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          this.handleError(err);
          reject(err);
        }
      );
    });
  }


  put(
    url: string,
    body: any,

  ) {
    return new Promise((resolve, reject) => {

      this.http
        .put(`${this.hostUrl}${url}`, body)
        .pipe(map((res) => res))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err);
            reject(err);
          }
        );
    });
  }




  delete(
    url: string,

  ) {
    return new Promise(async (resolve, reject) => {

      this.http
        .delete(`${this.hostUrl}${url}`)
        .pipe(
          map((res) => {
            return res;
          })
        )
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err);
            reject(err);
          }
        );
    });
  }


  patch(
    url: string,
    body: any,
    doNotSendAuthorizationParam: boolean = false,
    headerOptions: any = {}
  ) {
    return new Promise((resolve, reject) => {

      this.http
        .patch(`${this.hostUrl}${url}`, body)
        .pipe(map((res) => res))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err);
            reject(err);
          }
        );
    });
  }


  handleError = async (err: any) => {
    if (err.error.type == "error") {
      // this.utility.showErrorToast("Internal server error!");
    }
    else if (err.status === 404) {
      // this.utility.showErrorToast("Not Found");
    }

  };



}
