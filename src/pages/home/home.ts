import {
  Component
} from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
import { ProductDetailPage } from '../product_detail/product_detail';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController) {

  }

  // ngAfterViewInit() {
  //   const factory: ComponentFactory<HeaderPage> =
  //   this.resolver.resolveComponentFactory(HeaderPage);
  //   let componentRef = this.container.createComponent(factory);
  //   componentRef.instance.title = '富春江';
  //   componentRef.instance.hasSearchbar = true;
  //   componentRef.instance.hasMenu = true;
  // }

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

  openDetail(id) {
    this.navCtrl.push(ProductDetailPage);
  }

}
