// a component is a ts class
// export it to use it outside 
// use a decorator to make the class a component

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',  // we can use this as an html tag: to render something
    templateUrl: './container.component.html', // the content of container.component.html
    styleUrls: ['./container.component.css']
})
export class ContainerComponent {

}