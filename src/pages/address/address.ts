import { Component } from '@angular/core';
import {
  NavController,
  ViewController,
  AlertController,
  ToastController,
} from 'ionic-angular';

import { EditAddressPage } from '../edit_address/edit_address';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {

  list = [
    {
      id: 1,
      name: '唐良栋',
      phone: 18868748898,
      province: '浙江',
      city: '杭州',
      county: '临安区',
      street: '青山湖街道胜联村168号',
    },
    {
      id: 2,
      name: '唐良栋',
      phone: 18868748898,
      province: '浙江',
      city: '杭州',
      county: '富阳区',
      street: '文采路机金色家园7-2501',
    },
  ]

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {

  }

  openEditAddress(event,item){
    event.stopPropagation();
    this.navCtrl.push(EditAddressPage,{
      Address: item,
    });
  }

  itemSelected(event: any){
    console.log(123);
    console.log(event);
    console.log('hello world');
  }
  // 删除地址
  delete_address(){
    let alert = this.alertCtrl.create({
      title: '确定删除该地址吗？',
      message: '请注意： 删除该地址不会删除任何等待发运到该地址的订单。为确保未来的订单履行不受影响，请使用此地址更新所有愿望清单及订阅和保存设置。',
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
            let toast = this.toastCtrl.create({
              message: '成功删除该地址',
              duration: 3000,
              position: 'top'
            });

            toast.present();
          }
        }
      ]
    });
    alert.present();
  }

  // 打开新建地址页面
  openNewAddress(){
    this.navCtrl.push(EditAddressPage);
  }

}
