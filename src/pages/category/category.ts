import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
} from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
import { ProductDetailPage } from '../product_detail/product_detail';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  // @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    public navCtrl: NavController,
    private resolver: ComponentFactoryResolver,
    private modalCtrl: ModalController,) {

  }

  openDetail(id){
    this.navCtrl.push(ProductDetailPage)
  }

  openCart(){
    let phone = localStorage.getItem('phone');
    if(phone==undefined){
      let loginModal = this.modalCtrl.create(LoginPage,{
        isForcedLogin: true,
      });
      loginModal.present();
    }else{
      this.navCtrl.push(CartPage);
    }
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
