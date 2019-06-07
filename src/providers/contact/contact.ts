import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from 'angularfire2/database';
/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {
  public userId: string;

  constructor(

    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) {
    afAuth.authState.subscribe(user => {
      this.userId = user.uid;
    });
  }

  createContact(name: string, number: number): Promise<any> {
    const newContactRef = this.afDb
      .list(`clientProfile/${this.userId}/contacts/`)
      .push({});
    return newContactRef.set({
      name,
      number
    }).then(() => {
      this.afDb
        .object(`contacts/${newContactRef.key}`)
        .set({
          name,
          number,
          clientId: this.userId,
          contactId:newContactRef.key,
     
        });
    },
      error => {
        console.error(error);
      });
  }


  getContacts(): AngularFireList<any> {
    return this.afDb.list(`/clientProfile/${this.userId}/contacts/`);
  }


}
