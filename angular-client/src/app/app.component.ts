/*
This component is the "heart" of our application.
It will be used as the "root"-component, that renders the different views
in its .html template, all views will be shown in the <router-outler>.
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
