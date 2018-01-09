import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  ViewController,
  App,
  ModalController,
} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { LoginDetailPage } from '../login_detail/login_detail';
import { RegisterPage } from '../register/register';
import{ AppConfig }from'./../../app/app.config';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  isForcedLogin = false;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private modalCtrl: ModalController,
    private params: NavParams
  ) {
    if(params.get('isForcedLogin')!==undefined){
      this.isForcedLogin = params.get('isForcedLogin');
    }

  }

  openLoginDetailPage() {
    let modal = this.modalCtrl.create(LoginDetailPage);
    modal.present();
    // this.navCtrl.push(LoginDetailPage);
  }

  openRegisterPage() {
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
    // this.navCtrl.push(RegisterPage);
  }

  openHomePage() {
    console.log(this.isForcedLogin)
    if(this.isForcedLogin){
      this.viewCtrl.dismiss();
    }else{
      this.appCtrl.getRootNav().setRoot(TabsPage);
    }

  }

}
