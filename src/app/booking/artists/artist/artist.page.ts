import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artists/artist.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionsName } from 'src/app/common/global/collections';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
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
  editArtist(id: string) {
    this.router.navigateByUrl('artists/edit-artist/' + this.id);
  }
  deleteArtist(id: string) {
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Do you really want to delete the artist ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Confirm',
          handler: () => {
            this.afs
              .collection<Artist>(CollectionsName.artists)
              .doc(this.id)
              .delete()
              .then(() => {
                // await this.successToast();
                this.router.navigateByUrl('artists');
              })
              .catch();
          },
        },
      ],
    });

    await alert.present();
  }
  async successToast() {
    const toast = await this.toastController.create({
      message: 'Artist deleted.',
      duration: 2000,
      color: 'primary',
    });
    toast.present();
  }
}
