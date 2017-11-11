import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
  componentRef,
} from '@angular/core';

import { ToastController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})

export class ExplorePage {

  @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  icon = "ios-heart-outline";
  collect_flag = true;
  constructor(private toastCtrl: ToastController,
    private resolver: ComponentFactoryResolver) {

  }

  collecting() {
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

  ngAfterViewInit() {
    const factory: ComponentFactory<HeaderPage> =
    this.resolver.resolveComponentFactory(HeaderPage);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.title = '发现';
    this.componentRef.instance.hasSearchbar = false;
    this.componentRef.instance.menu = false;
  }
}
