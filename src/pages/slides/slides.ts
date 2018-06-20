import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
 
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }
  goToTabsPage(){
        this.navCtrl.push(TabsPage)
  }
}
