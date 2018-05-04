import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantsListPage } from './restaurants-list';

@NgModule({
  declarations: [
    RestaurantsListPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantsListPage),
  ],
})
export class RestaurantsListPageModule {}
