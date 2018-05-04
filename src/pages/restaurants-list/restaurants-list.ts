import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

//import google;



/**
 * Generated class for the RestaurantsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants-list',
  templateUrl: 'restaurants-list.html',
})
export class RestaurantsListPage {
  restaurants: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // google.maps.places.PlacesService(map);
    this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyD1NJibvMwPG3luDLP-TdJxuXywxsmzgdI ')
      .subscribe((res) => {console.log(res)});

  }

  cameraButton(){
    this.navCtrl.push('ArRestaurantPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsListPage');
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
    });
  }

}
