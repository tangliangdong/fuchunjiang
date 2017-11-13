import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';


@Component({
  selector: 'page-bought',
  templateUrl: 'bought.html'
})
export class BoughtPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

}
