import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9sjB_uwb3mTuR9ppCXk6iuxzCvvt6iDQ',
      authDomain: 'epiclogin-dfd55.firebaseapp.com'
    });
  }
}
