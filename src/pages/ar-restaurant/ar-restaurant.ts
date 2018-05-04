import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ar-restaurant',
  templateUrl: 'ar-restaurant.html',
})
export class ArRestaurantPage {
  @ViewChild('videoElement') videoElement: any;
  video: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArRestaurantPage');
    this.video= this.videoElement.nativeElement;
  }

  initCamera(config:any):void {
    navigator.mediaDevices.getUserMedia(config).then(stream => {
      this.video.srcObject= stream;
      this.video.play();
    }).catch((err)=> {
      console.error(err);
    });
  }

}
