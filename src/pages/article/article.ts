import { Component } from '@angular/core';
import { NavController,ViewController,App,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

  article = '';

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public appCtrl: App) {
      this.article = this.navParams.get('article');
      
  }

}
