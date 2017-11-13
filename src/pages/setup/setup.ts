import { Component } from '@angular/core';
import {
  NavController,
  ViewController,
  App,
  NavParams,
  ToastController,
} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { AddressPage } from '../address/address';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {

  isPushPage = false;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public navParams: NavParams,
    private toastCtrl: ToastController) {

    if(this.navParams.get('isPushPage')!=undefined){
      this.isPushPage = this.navParams.get('isPushPage');
    }

  }

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

  openAddressPage(){
    this.navCtrl.push(AddressPage);
  }

  openAccountPage(){
    this.navCtrl.push(AccountPage);
  }

  // 清除本地缓存
  clearLocalStorage(){
    let toast = this.toastCtrl.create({
      message: '清除缓存',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
