import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http'; // this is needed to send, and listen to a HTTP request
import { Observable } from 'rxjs/Observable'; // this is needed to make the service, return a Observable

@Injectable()
export class PostitService {
  private apiUrl: String = "http://it2810-02.idi.ntnu.no:8080/api"; // remember to make this use the environment variable


  // need a constructor to inject the HTTP-service
  constructor(private http: Http) {} //The private lets us use the http globaly


  // Create a method to fetch all from database!




}
