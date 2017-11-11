import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-my-account',
  templateUrl: 'my_account.html'
})
export class MyAccountPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
