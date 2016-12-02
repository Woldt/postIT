import { Component, OnInit } from '@angular/core';
import { PostitService } from '../_services/postit.service';

@Component({
  selector: 'search-postit',
  templateUrl: './searchPostit.component.html',
  styleUrls: ['./searchPostit.component.css']
})

export class SearchPostit {
  postits = [];

  constructor(private _postitService: PostitService){}

  ngOnInit() {
    this._postitService.getAllPostits()
      .subscribe(result => {
        this.postits = result;
      });
  }


}
