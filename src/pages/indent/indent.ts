import { Component } from '@angular/core';
import { NavController,ViewController,App,NavParams,ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { IndentDetailPage } from '../indent_detail/indent_detail';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

@Component({
  selector: 'page-indent',
  templateUrl: 'indent.html'
})
export class IndentPage {

  isPushPage = false;
  indents = [];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public appCtrl: App,
    private http: Http,
    public navParams: NavParams) {

    if(this.navParams.get('isPushPage')!=undefined){
      this.isPushPage = this.navParams.get('isPushPage');
    }
  }

  ionViewWillEnter(){
    let userId = localStorage.getItem('userId');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ 'headers': headers });

    this.http.post(SERVER_PATH+'app/indent?userId='+userId,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.indents = data.indent;
        if(data.indent.length===0){
          let toast = this.toastCtrl.create({
            message: '没有订单',
            duration: 1000,
            position: 'top'
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

  openIndent(indent){
    this.navCtrl.push(IndentDetailPage,{
      indentId: indent.id
    })
  }

  popView(){
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
