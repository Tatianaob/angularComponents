import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',  //wherever we are using the app-container or root tag
  templateUrl: './app.component.html',  // the content of the app.component.html will be rendered
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponent';
}
