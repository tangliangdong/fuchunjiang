import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
} from '@angular/core';

import { NavController,ToastController } from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

import { HeaderPage } from '../header/header';
import { ArticlePage } from '../article/article';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})

export class ExplorePage {

  @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  articles = [];
  icon = "ios-heart-outline";
  collect_flag = true;
  constructor(private toastCtrl: ToastController,
    public navCtrl: NavController,
    private http: Http,
    private resolver: ComponentFactoryResolver) {

  }

  ionViewWillEnter() {

    this.http.get(SERVER_PATH+'app/article')
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.articles = data;
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

  collecting(id) {
    if(this.collect_flag){
      this.icon = 'ios-heart';
      this.collect_flag = false;
      let toast = this.toastCtrl.create({
        message: '收藏成功',
        duration: 3000,
        position: 'top'
      });
      toast.present();

    }else{
      this.icon = 'ios-heart-outline';
      this.collect_flag = true;
      let toast = this.toastCtrl.create({
        message: '取消收藏',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

  // 跳转文章页
  openArticlePage(article){
    this.navCtrl.push(ArticlePage,{
      'article': article,
    });
  }

  // ngAfterViewInit() {
  //   const factory: ComponentFactory<HeaderPage> =
  //   this.resolver.resolveComponentFactory(HeaderPage);
  //   let componentRef = this.container.createComponent(factory);
  //   componentRef.instance.title = '发现';
  //   componentRef.instance.hasSearchbar = false;
  //   componentRef.instance.hasMenu = false;
  // }
}
