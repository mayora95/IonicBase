import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artists/artist.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Artist>;
  private artists: Observable<any>;
  constructor(private artistServe: ArtistService, private router: Router) {
    this.itemsCollection = artistServe.getArtist();
    this.artists = this.itemsCollection.valueChanges({ idField: 'id' });
  }

  ngOnInit() {}
  goToArtist(artistId: string) {
    this.router.navigateByUrl('artists/artist-details/' + artistId);
  }
}
