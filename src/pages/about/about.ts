import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
  componentRef,
} from '@angular/core';

import { NavController } from 'ionic-angular';

import { HeaderPage } from '../header/header';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
// 我的页面
export class AboutPage {

  @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(public navCtrl: NavController,
    private resolver: ComponentFactoryResolver) {

  }


  ngAfterViewInit() {
    const factory: ComponentFactory<HeaderPage> =
    this.resolver.resolveComponentFactory(HeaderPage);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.title = '我的';
    this.componentRef.instance.hasSearchbar = false;
    this.componentRef.instance.hasMenu = false;
  }
}
