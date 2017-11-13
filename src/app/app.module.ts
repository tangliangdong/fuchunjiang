import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';

// 四大主页
import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { CategoryPage } from '../pages/category/category';
import { AboutPage } from '../pages/about/about';
import { CartPage } from '../pages/cart/cart';

import { TabsPage } from '../pages/tabs/tabs';
import { HeaderPage} from '../pages/header/header';
import { IndentPage } from '../pages/indent/indent';
import { SetupPage } from '../pages/setup/setup';
import { MyAccountPage } from '../pages/my_account/my_account';
import { WishListPage } from '../pages/wish_list/wish_list';
import { ProductDetailPage } from '../pages/product_detail/product_detail';
import { CommentPage } from '../pages/comment/comment';
import { ArticlePage } from '../pages/article/article';
import { BoughtPage } from '../pages/bought/bought';
import { LoginPage } from '../pages/login/login';
import { AddressPage } from '../pages/address/address';
import { AlterPasswordPage } from '../pages/alter_password/alter_password';
import { AccountPage } from '../pages/account/account';
import { EditAddressPage } from '../pages/edit_address/edit_address';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ExplorePage,
    CategoryPage,
    AboutPage,
    CartPage,
    TabsPage,
    HeaderPage,
    SetupPage,
    MyAccountPage,
    IndentPage,
    WishListPage,
    ProductDetailPage,
    CommentPage,
    ArticlePage,
    BoughtPage,
    AccountPage,
    AlterPasswordPage,
    LoginPage,
    AddressPage,
    EditAddressPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ExplorePage,
    CategoryPage,
    AboutPage,
    CartPage,
    TabsPage,
    HeaderPage,
    SetupPage,
    MyAccountPage,
    IndentPage,
    WishListPage,
    ProductDetailPage,
    CommentPage,
    ArticlePage,
    BoughtPage,
    AccountPage,
    AlterPasswordPage,
    LoginPage,
    AddressPage,
    EditAddressPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
