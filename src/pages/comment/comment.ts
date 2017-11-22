import { Component } from '@angular/core';
import { NavController,ViewController,App,ToastController } from 'ionic-angular';


@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private toastCtrl: ToastController,) {

  }

  send() {
    let toast = this.toastCtrl.create({
      message: '发送成功',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

}
