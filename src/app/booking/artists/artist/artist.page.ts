import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artists/artist.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  public artist: Artist;
  public obsArtist: Observable<Artist>;
  public id: string;
  constructor(
    private artistService: ArtistService,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.afs
      .collection<Artist>('artists')
      .doc(this.id)
      .valueChanges()
      .subscribe((doc) => (this.artist = doc));
  }
  editArtist(id: string) {
    this.router.navigateByUrl('artists/edit-artist');
  }
  deleteArtist(id: string) {}
}
