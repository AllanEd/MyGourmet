import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {ARController, ARThreeScene, artoolkit } from 'jsartoolkit5';
//import { WebGLRenderer } from 'three';


@IonicPage()
@Component({
  selector: 'page-ar-restaurant',
  templateUrl: 'ar-restaurant.html',
})
export class ArRestaurantPage {
  @ViewChild('canvas') canvas: any;
  //@ViewChild('videoElement') videoElement: any;
  //video: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArRestaurantPage');
    /*this.video= this.videoElement.nativeElement;
    let constraints = {
      audio: false,
      video: {
        width: 182,
        height: 320
      }
    };
    this.initCamera(constraints);*/

    //this.initCanvas();
  }

 /* initCanvas():void {
    ARController.getUserMediaThreeScene({
      maxARVideoSize: 640,
      facingMode: 'environment',
      cameraParam: 'assets/data/camera_para.dat',
      onSuccess: (arScene: ARThreeScene, arController, arCamera) => {

        arController.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX);
        let renderer = new WebGLRenderer({
          antialias: true,
          alpha: true,
          canvas: this.canvas
        });
        this.renderer = renderer;

        if (arController.orentation === 'portrait') {
          renderer.setSize(this.height, this.width);
          renderer.domElement.style.transformOrigin = '0 0';
          renderer.domElement.style.transform = 'rotate(-90deg)translateX(-100%)';
        } else {
          renderer.setSize(this.width, this.height);
        }

        let tick = () => {
          arScene.process();
          arScene.renderOn(renderer);
          requestAnimationFrame(tick);
        };

        tick();
        this.trackMarker(arScene, arController, 5, plane);

      }
    });
  }


 /* initCamera(config:any):void {
    navigator.mediaDevices.getUserMedia(config).then(stream => {
      this.video.srcObject= stream;
      this.video.play();
    }).catch((err)=> {
      console.error(err);
    });
  }*/


 }
