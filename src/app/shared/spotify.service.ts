import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {

  constructor(private _http: Http) { }

  searchByTrack() {
    let params: string = [
      'q=${query}',
      'type=track'
    ].join('&');

    let queryURL: 'https://api.spotify.com/v1/search?${params}';

    return this._http.request(queryURL).map(res => res.json());
  }

}
