import {
  Component
} from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { HeaderPage } from '../header/header';
import { ProductDetailPage } from '../product_detail/product_detail';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products = [];

  // @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    public navCtrl: NavController,
    private http: Http,
    private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {

    this.http.get(SERVER_PATH+'app/home')
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.products = data;
      }).catch(err => {
        console.error(err);
        let toast = this.toastCtrl.create({
          message: '网络错误',
          duration: 1000,
          position: 'top',
        });
        toast.present();
      });
  }

  openDetailProduct(product){
    this.navCtrl.push(ProductDetailPage,{
      id: product.id
    })
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
