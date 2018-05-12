import { Component } from '@angular/core';

import { TocPage } from '../toc/toc';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BookPage } from '../book/book';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TocPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
