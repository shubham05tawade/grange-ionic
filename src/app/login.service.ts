import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';
import { FirestoreError } from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  success = false;

  constructor(private httpClient: HttpClient, private auth: Auth) {

  }

  login(email: string, password: string){
    signInWithEmailAndPassword(this.auth, email, password).then((data) => {
      this.success = true;
    }).catch((error: FirestoreError) => {
      if((error['code']).toString() === "auth/user-not-found"){
        createUserWithEmailAndPassword(this.auth,email, password).then((data) => {
          this.success = true
        })
      }
      else{
        this.success = false;
      }
    })
    return this.success
  }


  async loginWithGoogle(){
    this.success = false;
    await signInWithPopup(this.auth, new GoogleAuthProvider()).then((result)=> {
      this.success = true;
      console.log(this.success)
    }).catch((error)=> {
      console.log(error)
      this.success = false;
    })
    return this.success;
  }

  async loginWithFacebook(){
    this.success = false;
    await signInWithPopup(this.auth, new FacebookAuthProvider()).then((result)=> {
      this.success = true;
      console.log(this.success)
    }).catch((error)=> {
      console.log(error)
      this.success = false;
    })
    return this.success;
  }

  async loginWithTwitter(){
    this.success = false;
    await signInWithPopup(this.auth, new TwitterAuthProvider()).then((result)=> {
      this.success = true;
      console.log(this.success)
    }).catch((error)=> {
      console.log(error)
      this.success = false;
    })
    return this.success;
  }
}
