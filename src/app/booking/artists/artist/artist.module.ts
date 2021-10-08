import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistPageRoutingModule } from './artist-routing.module';

import { ArtistPage } from './artist.page';
import { CollectionsName } from 'src/app/common/global/collections';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ArtistPageRoutingModule],
  declarations: [ArtistPage],
  providers: [CollectionsName],
})
export class ArtistPageModule {}
