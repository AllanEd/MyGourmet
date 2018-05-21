import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { RezepteProvider } from '../providers/rezepte/rezepte';

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyDpTxhpFavnh7QtCH2YfME6TnDvy2cGasY",
  authDomain: "mygourmet-1524825386092.firebaseapp.com",
  databaseURL: "https://mygourmet-1524825386092.firebaseio.com",
  projectId: "mygourmet-1524825386092",
  storageBucket: "",
  messagingSenderId: "81313999421"
};


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RezepteProvider
  ]
})
export class AppModule {}
