import { Component } from '@angular/core';
import {
  NavController,
  ViewController,
  App,
  ToastController,
} from 'ionic-angular';
import { Http,Response,RequestOptions } from '@angular/http';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  get_validation_button_text = '发送验证码';
  isWaiting = false;
  timeFlag = '';
  phoneCode = '';
  User = {
    phone: '',
    code: '',
    password: '',
  }

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private toastCtrl: ToastController,
    private http: Http,) {

  }

  doRegister() {
    let $this = this;
    if(this.phoneCode !== this.User.code){
      let toast = this.toastCtrl.create({
        message: '验证码错误',
        duration: 1000,
        position: 'top',
      });
      toast.present();
      return;
    }
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;
    if(!regex.test(this.User.password)){
      let toast = this.toastCtrl.create({
        message: '请输入6-18位英文和数字密码',
        duration: 1000,
        position: 'top',
      });
      toast.present();
      return;
    }
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    this.http.post(SERVER_PATH+"app/register?phone="+this.User.phone+"&password="+this.User.password,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        if(data.status===1){
          $this.phoneCode = data.code;
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

    let toast = this.toastCtrl.create({
      message: '成功注册',
      duration: 1000,
      position: 'top',
    });
    // toast.onDidDismiss(() => {
    //   this.viewCtrl.dismiss();
    // });
    toast.present();

  }

  get_validation() {
    const regex = /^1[0-9]{10}$/g;
    let $this = this;
    if(this.User.phone == ''){
      let toast = this.toastCtrl.create({
        message: '请先输入手机号',
        duration: 1000,
        position: 'top',
      });
      toast.present();
      return;
    }
    if( regex.test(this.User.phone) ){
      let $this = this;
      this.get_validation_button_text = 60;
      this.isWaiting = true;

      this.timeFlag = setInterval(function(){
        if($this.get_validation_button_text<=0){
          clearInterval($this.timeFlag);
          $this.get_validation_button_text = '发送验证码';
          $this.isWaiting = false;
        }else{
          $this.get_validation_button_text--;
        }

      },1000);

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });
      this.http.post(SMS_PATH+'app/send?phone='+this.User.phone,options)
        .toPromise()
        .then(res => {
          let data = res.json();
          console.log(data);
          if(data.status===1){
            $this.phoneCode = data.code;
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
      let toast = this.toastCtrl.create({
        message: '成功发送验证码',
        duration: 1000,
        position: 'top',
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message: '请输入11位手机号',
        duration: 1000,
        position: 'top',
      });
      toast.present();
    }
  }

}
