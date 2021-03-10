import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAvOerIjMNSAT-qa7Gy2aMDTP_5pj0dM_0',
      authDomain: 'bookshelves-ef8ac.firebaseapp.com',
      databaseURL: 'https://bookshelves-ef8ac-default-rtdb.firebaseio.com/',
      projectId: 'bookshelves-ef8ac',
      storageBucket: 'gs://bookshelves-ef8ac.appspot.com',
      messagingSenderId: '94029459148',
      appId: '1:94029459148:web:2f2bc4dba323362779dc69',
      measurementId: 'G-8FMZMH6D63'
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
