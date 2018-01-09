import { Component } from '@angular/core';
import {
  NavController,
  ViewController,
  App,
  ToastController,
  LoadingController,
} from 'ionic-angular';
import { Http,Response,Jsonp,RequestOptions,Headers } from '@angular/http';

import { TabsPage } from '../tabs/tabs';

import{ AppConfig }from'./../../app/app.config';

@Component({
  selector: 'page-login-detail',
  templateUrl: 'login_detail.html'
})
export class LoginDetailPage {

  User = {
    phone: '',
    password: '',
  }

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private toastCtrl: ToastController,
    private http: Http,
    public loadingCtrl: LoadingController) {

  }

  doLogin() {
    let loading = this.loadingCtrl.create({
      content: '正在登陆'
    });

    loading.present();

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    let postParams = 'phone='+this.User.phone+'&password='+this.User.password;
    this.http.post(AppConfig.SERVER_PATH+'app/login?phone='+this.User.phone+'&password='+this.User.password,options)
      .toPromise()
      .then(res => {
        let listData = res.json();
        console.log(listData);
        loading.dismiss();
        if(listData.status===1){
          localStorage.setItem('phone',listData.phone);
          localStorage.setItem('username',listData.username);
          localStorage.setItem('addTime',listData.addTime);
          localStorage.setItem('add_time',listData.add_time);
          localStorage.setItem('userId',listData.id);

          let toast = this.toastCtrl.create({
            message: '成功登录',
            duration: 1000,
            position: 'top',
          });
          toast.onDidDismiss(() => {

          });
          this.viewCtrl.dismiss();
          this.appCtrl.getRootNav().setRoot(TabsPage);

          toast.present();
        }else{
          let toast = this.toastCtrl.create({
            message: '手机号和密码不匹配',
            duration: 1000,
            position: 'top',
          });
          toast.present();
        }
      }).catch(err => {
        console.error(err);
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: '网络错误',
          duration: 1000,
          position: 'top',
        });
        toast.present();
      });
    // this.http.post('http://localhost:50001/app/login?phone='+this.User.phone+'&password='+this.User.password)
    //   .subscribe((res: Response) => {
    //     let listData = res.json();
    //     console.log(listData);
    //     clearTimeout(time);
    //     loading.dismiss();
    //     if(listData.status===1){
    //       let toast = this.toastCtrl.create({
    //         message: '成功登录',
    //         duration: 1000,
    //         position: 'top',
    //       });
    //       toast.onDidDismiss(() => {
    //
    //       });
    //       this.viewCtrl.dismiss();
    //       this.appCtrl.getRootNav().setRoot(TabsPage);
    //
    //       toast.present();
    //     }else{
    //       let toast = this.toastCtrl.create({
    //         message: '手机号和密码不匹配',
    //         duration: 1000,
    //         position: 'top',
    //       });
    //       toast.present();
    //     }
    //   });


  }

}
