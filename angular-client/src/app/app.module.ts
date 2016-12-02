/*
This is the module, that puts together our application, and makes
everything available to app.component.ts, and then serves the app.component.ts
to the main.ts, which in turn is used to place the application, into the
index.html file.
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing }        from './app.router';


import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { Github } from './github/github.component';
import { Tutorial } from './tutorial/tutorial.component';
import { Postit } from './postIT/postit.component';
import { NewPostit } from './newPostit/newPostit.component';
import { SearchPostit } from './searchPostit/searchPostit.component';

import { PostitService } from './_services/postit.service';


@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Github,
    Postit,
    NewPostit,
    SearchPostit,
    Tutorial,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing

  ],
  providers: [
    PostitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
