import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CategoryPage } from '../category/category';
import { ExplorePage } from '../explore/explore';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = ExplorePage;
  tab4Root = AboutPage;

  constructor() {

  }
}
