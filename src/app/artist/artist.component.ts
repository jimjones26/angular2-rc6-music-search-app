import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../shared/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(public route: ActivatedRoute, public spotify: SpotifyService,
              public location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id)
      .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.location.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }
}
