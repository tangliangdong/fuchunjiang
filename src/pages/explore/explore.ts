import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
} from '@angular/core';

import { NavController,ToastController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
import { ArticlePage } from '../article/article';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})

export class ExplorePage {

  @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  icon = "ios-heart-outline";
  collect_flag = true;
  constructor(private toastCtrl: ToastController,
    public navCtrl: NavController,
    private resolver: ComponentFactoryResolver) {

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
  openArticlePage(id){
    this.navCtrl.push(ArticlePage);
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
