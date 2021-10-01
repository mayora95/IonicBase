import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Artist } from 'src/app/models/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private angulerFireStore: AngularFirestore) {}

  getArtists() {
    return this.angulerFireStore
      .collection('artists')
      .ref.get()
      .then((data) => console.log(data));
  }
  getArtist2() {
    const userDoc = this.angulerFireStore.firestore.collection(`itemss`);
    userDoc.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    });
    return userDoc;
  }
}
