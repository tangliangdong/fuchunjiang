import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IndentPage } from '../pages/indent/indent';
import { WishListPage } from '../pages/wish_list/wish_list';
import { SetupPage } from '../pages/setup/setup';
import { MyAccountPage } from '../pages/my_account/my_account';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  // rootPage:any = HomePage;

  first_pages: Array<{title: string, component: any}>;
  second_pages: Array<{title: string, component: any}>;
  third_pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    if(localStorage.getItem('userId')!=null){
      this.rootPage = TabsPage;
    }

    // used for an example of ngFor and navigation
    this.first_pages = [
      { title: '首页', component: TabsPage },
      // { title: '选择商品种类', component: CategoryPage },
    ];
    this.second_pages = [
      { title: '我的订单', component: IndentPage },
      { title: '心愿单', component: WishListPage },
      { title: '我的账户', component: MyAccountPage },
    ];
    this.third_pages = [
      { title: '设置', component: SetupPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
