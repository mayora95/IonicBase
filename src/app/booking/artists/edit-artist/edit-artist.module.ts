import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditArtistPageRoutingModule } from './edit-artist-routing.module';

import { EditArtistPage } from './edit-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditArtistPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditArtistPage],
})
export class EditArtistPageModule {}
