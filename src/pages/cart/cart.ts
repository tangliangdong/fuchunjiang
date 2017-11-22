import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  ToastController,
} from 'ionic-angular';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})

export class CartPage {
  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,) {

  }

  delete_cart(id) {
    let toast = this.toastCtrl.create({
      message: '删除商品成功',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }
}
