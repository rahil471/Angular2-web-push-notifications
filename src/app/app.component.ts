import { Component } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications'; //import the service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web push Notifications!';

  constructor(private _pushNotifications: PushNotificationsService){
    _pushNotifications.requestPermission(); // request for permission as soon as component loads
  }

  notify(){ //our function to be called on click
    let options = { //set options
      body: "The truth is, I'am Iron Man!",
      icon: "assets/images/ironman.png" //adding an icon
    }
    let notify = this._pushNotifications.create('Iron Man', options).subscribe( //creates a notification
        res => console.log(res),
        err => console.log(err)
    );
  }
}
