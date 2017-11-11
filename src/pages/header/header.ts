import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CartPage} from '../cart/cart';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})
// 我的页面
export class HeaderPage {

  constructor(public navCtrl: NavController,) {

  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

}
