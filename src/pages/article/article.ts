import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

}
