import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
  componentRef,
} from '@angular/core';


import { HeaderPage } from '../header/header';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  @ViewChild('header',{read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver) {

  }

  ngAfterViewInit() {
    const factory: ComponentFactory<HeaderPage> =
    this.resolver.resolveComponentFactory(HeaderPage);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.title = '品类';
    this.componentRef.instance.hasSearchbar = false;
    this.componentRef.instance.hasMenu = false;
  }
}
