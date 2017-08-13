import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';

  // Declare an array of button objects
  buttons: Array<boolean> = [false, false, false, false, false ]

  toggle(idx){
    this.buttons[idx] = !this.buttons[idx]
  }

}
