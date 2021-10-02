import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPage } from './artist/artist.page';
import { CommonModule } from '@angular/common';
import { ArtistsPage } from './artists.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistsPage,
  },
  {
    path: 'artist-details',
    component: ArtistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class ArtistsPageRoutingModule {}
