import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {User} from '../models/user';
import * as firebase from 'firebase';
 import {Router} from '@angular/router';
 import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;

  constructor( public  afAuth: AngularFireAuth) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {



    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword( username, password)
        .then(
          user => {


            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log('logged in');

            // return user;
            resolve(user);
          }, err => {
            reject(err);
            console.log('error from fire base' + err)
          });
    });

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    this.currentUserSubject.next(null);
  }

}
