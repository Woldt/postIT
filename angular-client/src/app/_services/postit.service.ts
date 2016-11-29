import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http'; // this is needed to send, and listen to a HTTP request
import { Observable } from 'rxjs/Observable'; // this is needed to make the service, return a Observable
import 'rxjs/add/operator/map';

import { PostitModel } from '../_models/postit.model';

@Injectable()
export class PostitService {
  private apiUrl: string = "http://it2810-02.idi.ntnu.no:8080/api"; // remember to make this use the environment variable


  // need a constructor to inject the HTTP-service
  constructor(private _http: Http) {} //The private lets us use the http globaly


  // Create a method to fetch all from database!
  getAllPostits(): Observable<PostitModel[]> {
    return this._http.get(this.apiUrl)
      .map((response: Response) => {
        let answer =  response;
        console.log(answer);
        return []
    });
  }



}
