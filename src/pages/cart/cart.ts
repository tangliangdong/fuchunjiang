import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  ToastController,
} from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})

export class CartPage {

  carts = [];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private http: Http,
    private toastCtrl: ToastController,) {

  }

  ionViewWillEnter() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ 'headers': headers });

    let userId = localStorage.getItem('userId');
    this.http.post(SERVER_PATH+'app/cart?userId='+userId,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.carts = data;

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

  delete_cart(id) {
    let toast = this.toastCtrl.create({
      message: '删除商品成功',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }
}
