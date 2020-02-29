import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service'
import * as uuid from 'uuid'
import * as firebase from 'firebase'
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
post = {
  name : '',
  image: '',
  status: ''
}
uid
email
profile
AdsImage: File;
  image_name: string;
  myId = uuid.v4();


  constructor(public itemService: ItemsService, private afStorage: AngularFireStorage ) { }

  ngOnInit() {
this.profile = JSON.parse(localStorage.getItem('currentUser'));
console.log(this.profile.user.uid);
this.uid = this.profile.user.uid;
this.email = this.profile.user.email;
  }

  onFileChanged(event) {
    this.AdsImage = <File> event.target.files[0]

  }

  // addPost() {


  //   this.image_name = this.myId + this.AdsImage.name
  //   this.afStorage.upload('/' + this.image_name, this.AdsImage).then(
  //       data => {
  //         const storageRef = firebase.storage().ref().child('/' + this.image_name)

  //         storageRef.getDownloadURL().then(url => {
  //           console.log(url)
  //           this.post.image = url;
  //           this.itemService.saveItem(this.post).then(res=>{
  //             console.log("saved in item:"+res)
  //           }).catch(err =>{
  //             console.log("saving new item err:"+err);
  //           })
  //         }).catch(err=>{
  //           console.log("url err:"+err)
  //         });
  //       }
  //     )
  // }
    addPost(){
     alert(this.post.image)
     this.itemService.saveItem(this.post);

   }

}
