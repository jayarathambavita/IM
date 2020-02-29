import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service'
import { Key } from 'protractor';
import { RouterLink, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 showLB = true ;
 showLO = false ;

  constructor( public itemService: ItemsService,private AS: AuthenticationService,private router:Router) { }
  private dataItem: any[] = [];

  public logo = "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/76/38/c7/7638c736-42c6-1d91-e369-d23662a542de/source/512x512bb.jpg"
  sample: string;
  sampleimg: string[] = [];

  
  ngOnInit() {

    // this.sampleimg.push("https://c.ndtvimg.com/2019-12/04jo3vos_mg-zs-ev-review_625x300_23_December_19.jpg",
    //   "https://www.toyota.lk/wp-content/uploads/2019/04/Camry-frount.jpg",
    //   "https://imgd.aeplcdn.com/600x337/cw/ec/41406/BMW-8-Series-Exterior-170077.jpg?wm=0&q=85",
    //   "https://274ea2957309fdba7396-692c78ed4b4b9a6d27e52e3b63613274.ssl.cf1.rackcdn.com/JTDKARFU7K3080466/7022612465b0aefd7df9ea7344e07169.jpg")


    if (localStorage.getItem('currentUser')) {
      this.showLB = false;
      this.showLO = true;
    } else {
      this.showLB = true;
    }

    this.getItems();
  }


  getItems() {
    // console.log('get items');
    this.itemService.getItem().then(
      (res: Map<string, any>) => {
        res.forEach(element => {
          // console.log('element' + JSON.stringify(element.value.name));
          this.dataItem.push(JSON.parse(JSON.stringify(element)));

        });
        console.log("ss" + this.dataItem);
      }
    );


 }
addPost(){
  if(localStorage.getItem('currentUser')){
  this.router.navigateByUrl('/addPost')
  }else{
    alert('please login First');
     this.router.navigateByUrl('/login')
  }
}

 reg(){
  this.router.navigate(['/register']);
 }
 logout(){
   this.AS.logout();
console.log("Log Out");
alert('Logout Succefully')
   this.showLO = false;
   this.showLB = true;
 }
}
