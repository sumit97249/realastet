import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import 'firebase/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sinup: boolean;
  user: any;
  uid: any;
  errorCode: any;
  errorMessage: any;

  constructor( private routers :Router ,private firebs :AngularFireDatabase ) { }

  singIn(data:any) {
    const email = data.email
    const password = data.password
    console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("singin suc");
        this.sinup = true
        this.routers.navigate([''])
        this.user = userCredential.user;
      
        this.uid = this.user.uid
        localStorage.setItem('userid',this.uid)
        console.log(this.uid)
        // this.routers.navigate(['data'])
      })
      .catch((error) => {
        this.errorCode = error.code;
        this.errorMessage = error.message;
        console.log(this.errorMessage)
      

      });
  }
  singout(){
    firebase.auth().signOut().then(() =>{
      localStorage.clear()
      console.log('Signed Out');
      this.routers.navigate([''])
    }, (error)=> {
      console.error('Sign Out Error', error);
    })
  }

}
