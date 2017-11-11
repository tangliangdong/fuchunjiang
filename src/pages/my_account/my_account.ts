import { Component } from '@angular/core';
import { NavController,ViewController,App,NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-my-account',
  templateUrl: 'my_account.html'
})
export class MyAccountPage {

  isPushPage = false;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public navParams: NavParams) {

    if(this.navParams.get('isPushPage')!=undefined){
      this.isPushPage = this.navParams.get('isPushPage');
    }

  }

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
