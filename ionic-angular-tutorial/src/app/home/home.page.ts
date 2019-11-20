import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Title of the page';
  clicked = false;
  constructor() {}

  onTextChange() {
    if ( this.clicked ) {
      this.title = 'Title of the page';
      this.clicked = false;
    } else {
      this.title = 'Title changed';
      this.clicked = true;
    }
  }
}
