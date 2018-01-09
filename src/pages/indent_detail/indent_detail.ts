import { Component } from '@angular/core';
import { NavController,
  ViewController,
  App,
  NavParams,
  ToastController,
} from 'ionic-angular';
import{ AppConfig }from'./../../app/app.config';

import { Http,Response,Jsonp,RequestOptions,Headers } from '@angular/http';

@Component({
  selector: 'page-indent-detail',
  templateUrl: 'indent_detail.html'
})
export class IndentDetailPage {

  indentId = 0;
  products = [];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public appCtrl: App,
    private http: Http,
    public navParams: NavParams) {

      this.indentId = this.navParams.get('indentId');
  }

  ionViewWillEnter() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ 'headers': headers });

    this.http.post(AppConfig.SERVER_PATH+'app/indent_detail?indentId='+this.indentId,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.products = data;
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
