import { Component } from '@angular/core';
import { NavController,ViewController,App,NavParams,ToastController } from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product_detail.html'
})

export class ProductDetailPage {

  Product = {};
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public appCtrl: App,
    public navParams: NavParams,
    private http:Http,) {

      let id = this.navParams.get('id');
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });
      this.http.post(SERVER_PATH+'app/product?id='+id,options)
        .toPromise()
        .then(res => {
          let data = res.json();
          console.log(data);
          this.Product = data;
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

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
