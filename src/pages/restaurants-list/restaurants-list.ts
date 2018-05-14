import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';



declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@IonicPage()
@Component({
  selector: 'page-restaurants-list',
  templateUrl: 'restaurants-list.html',
})
export class RestaurantsListPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
 platform.ready().then(()=>{
   this.initMap();
    });
  }

  cameraButton(){
    this.navCtrl.push('ArRestaurantPage');
  }

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsListPage');
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
    });
  }*/
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: ['store']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
      //infowindow.setContent(place.name);
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.vicinity + '</div>');
      infowindow.open(map, this);
    });
  }

}
