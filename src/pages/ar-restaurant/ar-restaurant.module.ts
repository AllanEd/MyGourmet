import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArRestaurantPage } from './ar-restaurant';

@NgModule({
  declarations: [
    ArRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(ArRestaurantPage),
  ],
})
export class ArRestaurantPageModule {}
