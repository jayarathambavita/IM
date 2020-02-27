import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
post = {
  name :'',
  image: '',
  status: ''
}

  constructor(public itemService: ItemsService ) { }

  ngOnInit() {

  }
   addPost(){
     alert(this.post.image)
   this.itemService.saveItem(this.post);
 
   }

}
