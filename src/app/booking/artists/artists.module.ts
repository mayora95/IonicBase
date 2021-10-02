import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsPageRoutingModule } from './artists-routing.module';

import { ArtistsPage } from './artists.page';
import { ArtistPage } from './artist/artist.page';
import { EditArtistPage } from './edit-artist/edit-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ArtistsPage, ArtistPage, EditArtistPage],
})
export class ArtistsPageModule {}
