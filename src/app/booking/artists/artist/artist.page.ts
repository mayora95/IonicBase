import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artists/artist.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  public artist: Artist;
  public obsArtist: Observable<Artist>;
  constructor(
    private artistService: ArtistService,
    private afs: AngularFirestore
  ) {}
  ngOnInit() {
    this.afs
      .collection<Artist>('artists')
      .doc('feroz')
      .valueChanges()
      .subscribe((deoc) => (this.artist = deoc));
  }
}
