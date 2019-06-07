import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { Observable } from 'rxjs';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  public contacts;
  public contactList: any;
  public users: any;
  constructor(
    public navCtrl: NavController,

    public contactProvider: ContactProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpertListPage');

    this.contactList = this.contactProvider.getContacts().snapshotChanges().map(users=>{
      // do something...
      console.log("// do something... ~" + users)
      return users.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    });

    console.log(this.contactList);



  }


  goToCreateContactFormPage(){
    this.navCtrl.push('AddContactPage');
  }

}
