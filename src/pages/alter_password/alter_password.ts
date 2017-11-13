import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';


@Component({
  selector: 'page-alter-password',
  templateUrl: 'alter_password.html'
})
export class AlterPasswordPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

}
