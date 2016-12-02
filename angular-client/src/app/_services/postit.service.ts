import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http'; // this is needed to send, and listen to a HTTP request
import { Observable } from 'rxjs/Observable'; // this is needed to make the service, return a Observable
import 'rxjs/add/operator/map';

import { PostitModel } from '../_models/postit.model';

@Injectable()
export class PostitService {
  private apiUrl: string = "http://localhost:8080/api"; // remember to make this use the environment variable


  // need a constructor to inject the HTTP-service
  constructor(private _http: Http) {} //The private lets us use the http globaly


  // Create a method to fetch all from database!
  getAllPostits(): Observable<PostitModel[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.get(this.apiUrl + "/postit/all",  { headers })
      .map((response: Response) => {
        let answer = JSON.parse(JSON.stringify(response.json())); // there has to be another way to do this, I don't understand!




        return answer;
    });
  }



}
