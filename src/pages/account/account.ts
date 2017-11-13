import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

}
