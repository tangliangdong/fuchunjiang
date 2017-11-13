import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
  ) {

  }

  openHomePage(){
    this.appCtrl.getRootNav().setRoot(TabsPage);
  }

}
