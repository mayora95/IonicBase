import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPage } from './artist/artist.page';
import { CommonModule } from '@angular/common';
import { ArtistsPage } from './artists.page';
import { EditArtistPage } from './edit-artist/edit-artist.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistsPage,
  },
  {
    path: 'artist-details',
    component: ArtistPage,
  },
  {
    path: 'artist-details/:id',
    component: ArtistPage,
  },
  {
    path: 'edit-artist/:id',
    component: EditArtistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class ArtistsPageRoutingModule {}
