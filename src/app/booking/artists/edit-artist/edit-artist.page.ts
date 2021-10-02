import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.page.html',
  styleUrls: ['./edit-artist.page.scss'],
})
export class EditArtistPage implements OnInit {
  public artist: Artist = new Artist();
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection<Artist>('artists')
      .doc('feroz')
      .valueChanges()
      .subscribe((doc) => (this.artist = doc));
  }
  logForm() {
    console.log(this.artist);
  }
  editArtist() {}
}
