import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artists/artist.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Artist>;
  private items: Observable<Artist[]>;
  constructor(
    private artistServe: ArtistService,
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Artist>('artists');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    // console.log(this.artistServe.getArtist2());
  }
}
