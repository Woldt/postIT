import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing }        from './app.router';


import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { Github } from './github/github.component';
import { Postit } from './postIT/postit.component';
import { NewPostit } from './newPostit/newPostit.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Github,
    Postit,
    NewPostit,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
