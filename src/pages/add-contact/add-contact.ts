import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,  LoadingController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactProvider } from '../../providers/contact/contact';

/**
 * Generated class for the AddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {
  public createContactForm: FormGroup;

  constructor(
    public contactProvider: ContactProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,

  ) 
  {
    this.createContactForm = formBuilder.group({
      contactName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

  createContact(): void {
    
    const loading = this.loadingCtrl.create();
    if (!this.createContactForm.valid) {
      console.log(this.createContactForm.value);
    } else {
      this.contactProvider
        .createContact(
          this.createContactForm.value.contactName,
          this.createContactForm.value.phoneNumber,
        )
        .then(
          () => {
            loading.dismiss().then(() => {
              this.navCtrl.setRoot('ContactsPage');
            });
          },
          error => {
            loading.dismiss().then(() => {
              console.log(error);
            });
          }
        );
    }
    loading.present();
  }


}
