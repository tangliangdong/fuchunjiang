import { Component,ViewChild } from '@angular/core';
import { ModalController,NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { CategoryPage } from '../category/category';
import { ExplorePage } from '../explore/explore';
import { HomePage } from '../home/home';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = ExplorePage;
  tab4Root = AboutPage;

  @ViewChild('myTabs') tabRef: Tabs;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController) {

  }

  checkLogin() {
    let phone = localStorage.getItem('phone');
    if(phone==undefined){
      let loginModal = this.modalCtrl.create(LoginPage,{
        isForcedLogin: true,
      });
      loginModal.onDidDismiss(data => {
        phone = localStorage.getItem('phone');
        if(phone==undefined){
          this.tabRef.select(0);
        }
      });
      loginModal.present();
    }
  }
}
