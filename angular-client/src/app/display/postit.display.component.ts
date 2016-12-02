import { Component, OnInit } from '@angular/core';
import { PostitService } from '../_services/postit.service';

@Component({
  selector: 'display-postit',
  templateUrl: './postit.display.component.html',
  styleUrls: ['./postit.display.component.css']
})

export class DisplayPostit {
  postits = [];

  constructor(private _postitService: PostitService){}

  ngOnInit() {
    this._postitService.getAllPostits()
      .subscribe(result => {
        this.postits = result;
      });
  }


}
