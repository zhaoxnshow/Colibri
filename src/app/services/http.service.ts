import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
// import "rxjs/Rx"

import {Observable} from "rxjs"

@Injectable()
export class HttpService {
  

  readonly ROOT_URL = 'http://localhost:5555/';

  constructor(private http: HttpClient) {
  }

  readonly jsonHeader = new HttpHeaders({
      'Content-Type': 'application/json'
  });
    

    
  // /**
  //  * player login
  //  * @param {string} username
  //  * @param {string} password
  //  * @returns {Promise<Response>}
  //  */
  // loginPlayer(username: string, password: string) {
  //   const login_url = this.ROOT_URL + "player/login";

  //   let authorization: Authorization = {
  //     username: username,
  //     password: password
  //   };

  //   let userLoginData: PlayerLoginModel = {
  //     authorization: authorization
  //   };

  //   return this.http.post(login_url, userLoginData, {
  //     headers: this.jsonHeader,
  //     observe: 'response'
  //   }).toPromise().then(this.extractData).catch(this.handleErrorPromise);
  // }

  // getGameStatus(): Observable<GameStatusModel> {
  //   const get_game_status_url = this.ROOT_URL + "game/status";

  //   return this.http.post(get_game_status_url, null, {
  //     headers: this.jsonHeader
  //   }).catch(this.handleErrorObservable);
  // }
  // 
  //   /**
  //  * handle errors of observable
  //  * @param error
  //  * @returns {Observable<any>}
  //  */
  // private handleErrorObservable(error: any): Observable<any> {
  //   console.error('An error occurred in observable', error);
  //   return (error.message || error);
  // }
  // Observable need  model, atmdto is big model, hard to split



  getData(relativeUrl :string){
    const url = this.ROOT_URL + relativeUrl;
    return this.http.get(url,{
      headers: this.jsonHeader,
      observe:'response'
    }).toPromise().then(this.extractData).catch(this.handleErrorPromise);
  }

  postData(relativeUrl:string, postdata:string){
    const url = this.ROOT_URL + relativeUrl;
    return this.http.post(url,postdata,{
      headers:this.jsonHeader,
      observe:'response'
    }).toPromise().then(this.extractData).catch(this.handleErrorPromise)
  }

  /**
   * extract data from response
   * @param res
   * @returns {any}
   */
  private extractData(res) {
    return res;
  }


  /**
   * handle errors of promise
   * @param error
   * @returns {Promise<any>}
   */
  private handleErrorPromise(error: any): Promise<any> {
    console.error('HTTP error occurred');
    return Promise.reject(error.message || error);
  }
}