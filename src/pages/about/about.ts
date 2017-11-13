import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
} from '@angular/core';

import { NavController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
import { IndentPage } from '../indent/indent';
import { CommentPage } from '../comment/comment';
import { WishListPage } from '../wish_list/wish_list';
import { CartPage } from '../cart/cart';
import { BoughtPage } from '../bought/bought';
import { SetupPage } from '../setup/setup';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
// 我的页面
export class AboutPage{
  // @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    public navCtrl: NavController,
    private resolver: ComponentFactoryResolver) {

  }

  // 跳转订单页
  openIndentPage() {
    this.navCtrl.push(IndentPage,{
      isPushPage: true,
    });
  }

  // 跳转心愿单页
  openWishListPage() {
    this.navCtrl.push(WishListPage,{
      isPushPage: true,
    });
  }

  // 跳转app反馈页
  openCommentPage(){
    this.navCtrl.push(CommentPage,{
      isPushPage: true,
    });
  }

  openCart(){
    this.navCtrl.push(CartPage);
  }
  
  openBoughtPage(){
    this.navCtrl.push(BoughtPage);
  }
  
  openSetupPage(){
    this.navCtrl.push(SetupPage,{
      isPushPage: true,
    });
  }


  // ngAfterViewInit() {
  //   this.loadComponent();
  // }

  // loadComponent() {
  //   const factory: ComponentFactory<HeaderPage> =
  //   this.resolver.resolveComponentFactory(HeaderPage);
  //   let componentRef = this.container.createComponent(factory);
  //   componentRef.instance.title = '我的';
  //   componentRef.instance.hasSearchbar = false;
  //   componentRef.instance.hasMenu = false;
  // }
}
