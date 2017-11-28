import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
} from '@angular/core';

import { NavController,ModalController,ToastController } from 'ionic-angular';

import { Http,Response,Jsonp,RequestOptions } from '@angular/http';

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
  lastOne = 0;
  classify = [];
  Products = [];

  constructor(
    public navCtrl: NavController,
    private resolver: ComponentFactoryResolver,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private http: Http,) {

  }

  openDetail(product){
    this.navCtrl.push(ProductDetailPage,{
      id: product.id
    })
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

  click_classify(item,index) {
    console.log(index)
    console.log(item)
    this.classify[index].flag = true;
    this.classify[this.lastOne].flag = false;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    this.http.post(SERVER_PATH+'app/get_product?pid='+this.classify[index].id,options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.Products = data.products;
      }).catch(err => {
        console.error(err);
        let toast = this.toastCtrl.create({
          message: '网络错误',
          duration: 1000,
          position: 'top',
        });
        toast.present();
      });
    this.lastOne = index;
  }

  ionViewWillEnter() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let userId = localStorage.getItem('userId');
    this.http.post(SERVER_PATH+'app/classify',options)
      .toPromise()
      .then(res => {
        let data = res.json();
        console.log(data);
        this.classify = data.classify;
        if(this.classify.length!=0){
          this.classify[0].flag = true;
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/x-www-form-urlencoded');
          let options = new RequestOptions({ headers: headers });
          this.http.post(SERVER_PATH+'app/get_product?pid='+this.classify[0].id,options)
            .toPromise()
            .then(res => {
              let data = res.json();
              console.log(data);
              this.Products = data.products;
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

  // ngAfterViewInit() {
  //   const factory: ComponentFactory<HeaderPage> =
  //   this.resolver.resolveComponentFactory(HeaderPage);
  //   let componentRef = this.container.createComponent(factory);
  //   componentRef.instance.title = '品类';
  //   componentRef.instance.hasSearchbar = false;
  //   componentRef.instance.hasMenu = false;
  // }
}
