import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
