import { Component } from '@angular/core';
import { PostitService } from '../_services/postit.service';
import { PostitModel } from '../_models/postit.model';


@Component({
  selector: 'new-postit',
  templateUrl: './newPostit.component.html',
  styleUrls: ['./newPostit.component.css']
})

export class NewPostit {

  constructor(private _postitService: PostitService) {}

  onSubmit(t:string, c: Array<string>, d:string ) {
    let postit = new PostitModel();
    postit.title = t;
    postit.category = c;
    postit.description = d;

    this._postitService.addNewPostit(postit);
  }


}
