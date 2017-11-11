import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
  componentRef,
} from '@angular/core';
import { NavController } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { HeaderPage } from '../header/header';
import { ProductDetailPage } from '../product_detail/product_detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    public navCtrl: NavController,
    private resolver: ComponentFactoryResolver) {

  }

  ngAfterViewInit() {
    const factory: ComponentFactory<HeaderPage> =
    this.resolver.resolveComponentFactory(HeaderPage);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.title = '富春江';
    this.componentRef.instance.hasSearchbar = true;
    this.componentRef.instance.hasMenu = true;
  }

  openDetail(id) {
    this.navCtrl.push(ProductDetailPage);
  }

}
