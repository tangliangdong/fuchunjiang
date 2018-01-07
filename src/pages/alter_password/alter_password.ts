import { Component } from '@angular/core';
import { NavController,ViewController,App ,ToastController} from 'ionic-angular';


@Component({
  selector: 'page-alter-password',
  templateUrl: 'alter_password.html'
})
export class AlterPasswordPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public appCtrl: App) {

  }

  passwd_save(){
    let toast = this.toastCtrl.create({
      message: '修改成功',
      duration: 1000,
      position: 'top',
    });
    toast.present();

  }

}
