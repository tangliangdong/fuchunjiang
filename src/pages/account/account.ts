import { Component } from '@angular/core';
import { NavController,ViewController,App,ModalController,ToastController } from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

import { AlterPasswordPage } from '../alter_password/alter_password';
import { AppConfig }from'./../../app/app.config';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  username = '';

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private toastCtrl: ToastController,
    private http:Http,
    public modalCtrl: ModalController) {

      let userId = localStorage.getItem('userId');

      this.http.get(AppConfig.SERVER_PATH+'app/user/userinfo?userId='+userId)
        .toPromise()
        .then(res => {
          let data = res.json();
          console.log(data);
          this.username = data.username;
        }).catch(err => {
          console.error(err);
          let toast = this.toastCtrl.create({
            message: '网络错误',
            duration: 1000,
            position: 'top',
          });
          toast.present();
        });

  }

  save(){
    let toast = this.toastCtrl.create({
      message: '保存成功',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

  alter_passwd(){
    let modal = this.modalCtrl.create(AlterPasswordPage);
    modal.present();
  }

}
