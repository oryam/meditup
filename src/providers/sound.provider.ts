import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { APP } from '../app/env';
import { SoundTrack } from '../domain/sound.model';

@Injectable()
export class SoundProvider {

  constructor(public http: HttpClient) {
  }

  getPlaylist(): Observable<SoundTrack[]> {
    const url = APP.service.root + '/sounds/json';
    return this.http.get<SoundTrack[]>(url);
  }

}
