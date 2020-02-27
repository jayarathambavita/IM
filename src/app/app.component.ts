import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseStorage } from 'angularfire2';
import { ItemsService } from '../services/items.service';
import { FeedItem, IFeedItem } from '../models/feedItem';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAndFireDatabase';
 item: IFeedItem;
 feedItems=new Map()



 constructor(
   private itemService: ItemsService,
   private AngualarFire : AngularFireDatabase
   ){
  this.item = new FeedItem();
 }

 saveItemHere(){
   this.item.image = "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg";
   this.item.name = "Dinalie Traders"
   this.item.profilePic = "http://carview.lk/uploads/16807771_1911747452394843_4252072060337472315_n.jpg"
   this.item.status = "Wheelbase	2,703 mm (106.4 in)"
   this.itemService.saveItem(this.item);
 }

 getItems(){
   console.log("get items");
   this.itemService.getItem().then(
    (res: Map<string,any>)=>{
     res.forEach(element => {
       console.log("element"+JSON.stringify(element.key))

     });
    }
   )
 }

}
