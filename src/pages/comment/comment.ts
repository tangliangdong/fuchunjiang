import { Component } from '@angular/core';
import { NavController,ViewController,App,ToastController } from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {

  Comment = {
    title: '',
    content: '',
  };

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private toastCtrl: ToastController,
    private http: Http,) {

  }

  send() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let userId = localStorage.getItem('userId');

    this.http.post(SERVER_PATH+'app/discuss/add?title='+this.Comment.title+'&content='+this.Comment.content+'&userId='+userId,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        if(data.status===1){
          let toast = this.toastCtrl.create({
            message: '成功反馈',
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
    let toast = this.toastCtrl.create({
      message: '发送成功',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

}
