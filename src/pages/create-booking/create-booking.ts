import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-booking',
  templateUrl: 'create-booking.html',
})
export class CreateBookingPage {
  category: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = [
      {"name": "A", "id": 1, "parent_id": 0},
      {"name": "B", "id": 2, "parent_id": 0},
      {"name": "A1", "id": 3, "parent_id": 1},
      {"name": "A2", "id": 4, "parent_id": 1},
      {"name": "B1", "id": 5, "parent_id": 2},
      {"name": "B2", "id": 6, "parent_id": 2},
      ];
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBookingPage');
  }

}
