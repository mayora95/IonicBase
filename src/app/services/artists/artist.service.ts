import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionsName } from 'src/app/common/global/collections';
import { Artist } from 'src/app/models/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private angulerFireStore: AngularFirestore) {}

  getArtist() {
    return this.angulerFireStore.collection<Artist>(CollectionsName.artists);
  }
  getArtistByEmail(email: string) {
    return this.angulerFireStore.doc('artists/feroz');
  }
}
