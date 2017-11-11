import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish_list.html'
})
export class WishListPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
