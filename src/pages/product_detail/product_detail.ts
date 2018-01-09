import { Component } from '@angular/core';
import { NavController,ViewController,App,NavParams,ToastController } from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions,Headers } from '@angular/http';

import { TabsPage } from '../tabs/tabs';
import{ AppConfig }from'./../../app/app.config';

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
      this.http.post(AppConfig.SERVER_PATH+'app/product?id='+id,options)
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

  add_cart(Product){
    let userId = localStorage.getItem('userId');
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    this.http.post(AppConfig.SERVER_PATH+'app/get_in_cart?userId='+userId+'&productId='+Product.id+'&count=1',options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);

        if(data.status===1){
          let toast = this.toastCtrl.create({
            message: '成功加入购物车',
            duration: 1000,
            position: 'top',
          });
          toast.present();
        }

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

  add_wish(Product){
    let userId = localStorage.getItem('userId');
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    this.http.post(AppConfig.SERVER_PATH+'app/wish/add?userId='+userId+'&productId='+Product.id,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);

        if(data.status===1){
          let toast = this.toastCtrl.create({
            message: '成功加入心愿单',
            duration: 1000,
            position: 'top',
          });
          toast.present();
        }

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
