import { Component } from '@angular/core';
import {
  NavController,
  ViewController,
  App,
  AlertController,
  NavParams,
  ToastController,
} from 'ionic-angular';


@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit_address.html'
})
export class EditAddressPage {

  Address = {
    id: 0,
    name: '',
    phone: '',
    province: '',
    city: '',
    county: '',
    street: '',
    isEdit: false,
  };

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private toastCtrl: ToastController,) {

      if(this.navParams.get('Address')!=undefined){
        this.Address = this.navParams.get('Address');
        this.Address.isEdit = true;
      }
  }

  submit_address(){
    let alert = this.alertCtrl.create({
      title: '新的收货地址',
      message: '确定生成新的收货地址吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            let word = '新建成功';
            if(this.Address.isEdit){
              word = '修改成功';
            }

            let toast = this.toastCtrl.create({
              message: word,
              duration: 3000,
              position: 'top',
            });
            toast.present();
          }
        }
      ]
    });
    alert.present();
  }



}
