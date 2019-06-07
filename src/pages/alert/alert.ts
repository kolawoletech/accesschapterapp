import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { Twilio } from 'twilio';

const client = new Twilio("MY_ACCOUNT_SID", "MY_AUTH_TOKEN");

client.messages.each({ limit: 10 }, function(message) {
  console.log(message.body);
}); */
/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');

  }

  sendAlert(){
/*     var numbersToMessage = ["+15558675310", "+14158141829", "+15017122661"]

    numbersToMessage.forEach(function(number){
      var message = client.messages.create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+12564884455',
        to: number
      })
      .then(message =>  console.log(message.status))
      
    }); */


    
  }

}
