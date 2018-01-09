import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  ToastController,
  ModalController,
} from 'ionic-angular';

import { PlaceOrderPage } from '../place_order/place_order';

import { Http,Response,Jsonp,RequestOptions,Headers } from '@angular/http';
import{ AppConfig }from'./../../app/app.config';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})

export class CartPage {

  carts = [];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private http: Http,
    private toastCtrl: ToastController,) {

  }

  ionViewWillEnter() {
    let userId = localStorage.getItem('userId');
    this.http.get(AppConfig.SERVER_PATH+'app/cart?userId='+userId)
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

  delete_cart(cart) {
    let id = cart.id;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    this.http.post(AppConfig.SERVER_PATH+'app/cart/delete?id='+id,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        if(data.status===1){
          for(var i in this.carts){
            if(this.carts[i].id == id){
              this.carts.splice(parseInt(i),1);
              break;
            }
          }
          let toast = this.toastCtrl.create({
            message: '删除商品成功',
            duration: 1000,
            position: 'top',
          });
          toast.present();
        }


      }).catch(err => {
        let toast = this.toastCtrl.create({
          message: '网络错误',
          duration: 1000,
          position: 'top',
        });
        toast.present();
      });

  }


  purchase(){
    let indentModal = this.modalCtrl.create(PlaceOrderPage,{
      carts: this.carts,
    });
    indentModal.onDidDismiss(data => {
      if(data!=undefined&&data.status===1){
        this.carts.length = 0;
      }
    });
    indentModal.present();
  }
}
