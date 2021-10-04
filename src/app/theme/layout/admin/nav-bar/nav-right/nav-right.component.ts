import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import firebase from 'firebase/app'
import { AngularFireDatabase } from '@angular/fire/database'
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  constructor(private db: AngularFireDatabase , private route :Router ) { }

  ngOnInit() { }
  singout(){
    firebase.auth().signOut().then(() => {
      localStorage.removeItem("userid");
      this.route.navigate(['/singin']);
      
    }).catch((error) => {
      // An error happened.
    });
  }
}
