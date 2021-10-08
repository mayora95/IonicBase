import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { CollectionsName } from 'src/app/common/global/collections';
import { Artist } from 'src/app/models/artist';

//UI Component
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.page.html',
  styleUrls: ['./edit-artist.page.scss'],
})
export class EditArtistPage implements OnInit {
  public artist: Artist = new Artist();
  public id: string;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.afs
      .collection<Artist>(CollectionsName.artists)
      .doc(this.id)
      .valueChanges()
      .subscribe((doc) => (this.artist = doc));
  }
  saveArtist() {
    this.afs
      .collection(CollectionsName.artists)
      .doc(this.id)
      .set(this.artist)
      .then(() => {
        this.successToast();
      });
  }
  async successToast() {
    const toast = await this.toastController.create({
      message: 'Artist successfully saved.',
      duration: 2000,
      color: 'primary',
    });
    toast.present();
  }
  async failedToast() {
    const toast = await this.toastController.create({
      message: 'An error occured while saving the artist. please try again.',
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
}
