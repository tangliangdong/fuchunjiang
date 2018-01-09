import { Component } from '@angular/core';
import { NavController,ViewController,App,NavParams,ToastController } from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions,Headers } from '@angular/http';
import{ AppConfig }from'./../../app/app.config';

@Component({
  selector: 'page-place-order',
  templateUrl: 'place_order.html'
})
export class PlaceOrderPage {

  address = [];
  address_item = '';
  addressId = 0;
  note = '';
  products: any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private http: Http,
    public appCtrl: App) {

      this.products = this.navParams.get('carts');
      console.log(this.products);

  }

  select_address(e){
    for(var i in this.address){
      if(this.address[i].id==e){
        this.address_item = this.address[i];
        break;
      }
    }
  }

  comfirm_indent(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let userId = localStorage.getItem('userId');
    let url = AppConfig.SERVER_PATH+'app/indent/add?userId='+userId+'&note='+this.note+'&addressId='+this.addressId;
    this.http.post(url,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.viewCtrl.dismiss({'status':1});

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

  ionViewWillEnter(){
    let userId = localStorage.getItem('userId');
    this.http.get(AppConfig.SERVER_PATH+'app/address?userId='+userId)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.address = data.address;
        if(this.address.length>0){
          this.address_item = this.address[0];
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
}
