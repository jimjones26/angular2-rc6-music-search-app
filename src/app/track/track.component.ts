import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../shared/spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(public route: ActivatedRoute, public spotify: SpotifyService,
    public location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.location.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }
}
