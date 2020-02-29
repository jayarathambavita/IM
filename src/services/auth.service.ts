import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private db: AngularFireDatabase, private router: Router) { }
  userid

  doRegister(value: User) {
    console.log("call" + value);

    //  return new Promise<any>((resolve, reject) => {

    //     // the creteuserfun... it is firebase library function we imported
    //     //it is create a account statement 1
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        value.id = res.user.uid;
        console.log("call" + value)
        return this.db.list('/user/').push(value).then(val => {
          alert("Registered successfully");
          this.router.navigate(['/home']);
        })

      }).catch(err => { alert("err" + err) });

  };

}
