import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SoundProvider } from '../../providers/sound.provider';
import { SoundTrack } from '../../domain/sound.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-sound',
  templateUrl: 'sound.html',
})
export class SoundPage {

  soundtracks: Observable<SoundTrack[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private soundProvider: SoundProvider) {
  }

  ionViewDidLoad() {
    this.soundtracks = this.soundProvider.getPlaylist();
  }

  onSelectTrack(soundtrack: SoundTrack) {

  }

}
