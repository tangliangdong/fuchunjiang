import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
} from '@angular/core';

import { NavController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
import { ProductDetailPage } from '../product_detail/product_detail';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  // @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    public navCtrl: NavController,
    private resolver: ComponentFactoryResolver) {

  }

  openDetail(id){
    this.navCtrl.push(ProductDetailPage)
  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

  // ngAfterViewInit() {
  //   const factory: ComponentFactory<HeaderPage> =
  //   this.resolver.resolveComponentFactory(HeaderPage);
  //   let componentRef = this.container.createComponent(factory);
  //   componentRef.instance.title = '品类';
  //   componentRef.instance.hasSearchbar = false;
  //   componentRef.instance.hasMenu = false;
  // }
}
