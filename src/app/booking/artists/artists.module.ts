import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsPageRoutingModule } from './artists-routing.module';

import { ArtistsPage } from './artists.page';
import { ArtistPage } from './artist/artist.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ArtistsPageRoutingModule],
  declarations: [ArtistsPage, ArtistPage],
})
export class ArtistsPageModule {}
