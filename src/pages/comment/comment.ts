import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';


@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App) {

  }

}
