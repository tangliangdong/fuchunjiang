import { Component } from '@angular/core';
import {
  NavController,
  ViewController,
  App,
  NavParams,
  ToastController,
} from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

import { TabsPage } from '../tabs/tabs';
import { ProductDetailPage } from '../product_detail/product_detail';
import{ AppConfig }from'./../../app/app.config';

@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish_list.html'
})
export class WishListPage {

  isPushPage = false;
  wishList = [];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public appCtrl: App,
    public navParams: NavParams,
    private http: Http,) {

    if(this.navParams.get('isPushPage')!=undefined){
      this.isPushPage = this.navParams.get('isPushPage');
    }
  }

  ionViewWillEnter() {
    let userId = localStorage.getItem('userId');
    this.http.get(AppConfig.SERVER_PATH+'app/wish?userId='+userId)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.wishList = data;
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

  openWish(wish){
    this.navCtrl.push(ProductDetailPage,{
      id: wish.idd
    })
  }

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

  openDetailPage(id) {
    this.navCtrl.push(ProductDetailPage);
  }

}
