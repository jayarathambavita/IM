import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FeedItem } from '../models/feedItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  feedItems = new Map<string, any>();


  constructor(private db: AngularFireDatabase) {

  }

  // getItems(){
  //   this.db.list('/feeditem').snapshotChanges().subscribe(
  //     res=>{
  //      res.map(item=>{
  //         const payload = item.payload.val;
  //         const key = item.key
  //         return <any>{ key};
  //       })


  //     }
  //   );
  // }

  getItem() {

    return new Promise((resolve, reject) => {

      this.db.database.ref('feedItem').orderByKey().on('child_added', (childSnapshot, prevChildSnapshot) => {

        this.feedItems.set(childSnapshot.key, childSnapshot)
        resolve(this.feedItems);
      }, err => {
        reject(err);
      }

      );




    }
    )
    // return this.db.list('feedItem').snapshotChanges();

  }

  saveItem(item: FeedItem) {
    this.db.list('/feedItem').push(item)
  }
}
