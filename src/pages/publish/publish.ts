import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { APP } from '../../app/env';

@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {

  formActionUrl = APP.service.root + '/sounds';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
