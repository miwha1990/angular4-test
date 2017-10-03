import { Component, OnInit } from '@angular/core';
import {TabsComponent} from '../tabs/tabs';
import {TabComponent} from '../tabs/tab';
import {HttpClient} from '@angular/common/http';
import { TabsService } from '../tabs.service';
@Component({
  selector: 'app-my-sidebar',
  templateUrl: './my-sidebar.component.html',
  styleUrls: ['./my-sidebar.component.css', './humburger.css']
})
export class MySidebarComponent implements OnInit {
  menuItems: string[];
  mainIcons = ['fa-university', 'fa-user', 'fa-user-secret', 'fa-pie-chart', 'fa-calculator', 'fa-envelope'];
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(private http: HttpClient, private tabsService: TabsService) { }

  ngOnInit() {
    this.http.get('https://demo3972307.mockable.io/').subscribe(data => {
      this.menuItems = data['menuItems'];
      this.menuItems.forEach((val, index) => {
        val['icon'] = this.mainIcons[index];
        val['state'] = val['item'].replace(new RegExp(' ', 'g'), '_');
        val['subitems'].map((value, i) => {
          val['subitems'][i] = {title: value, active: false, tab: (this.tabsService.Tabs ? this.tabsService.Tabs['_results'][i] : '')}
        })
        val['tabs'] = this.tabsService.Tabs;
        console.log(val['subitems'])
      });
    });
  }
  changeTab(subTab, allItems) {
    /*this.tabsService.Tabs['_results'].forEach(e => {
        e['active'] = (MySidebarComponent.capitalizeFirstLetter(subTab) === e['tabTitle'])
      console.log(e)
    });*/
    this.tabsService.Tabs['_results'].forEach(e => {
        e['active'] = false;
        console.log('eee', e)
        console.log('tab', subTab.tab);
        if (subTab.tab['tabTitle'] === e['tabTitle']) {
          e['active'] = true;
        }
    });
    allItems.forEach(v => v.active = false)
    subTab.tab.active = true;
    subTab.active = true;
    console.log(this.tabsService.Tabs['_results'])
  }
  changeState(subItems) {
    subItems.forEach(v => v.active = false)
    // this.menuItems.forEach((val) => {
    //   val['tabs'] = this.tabsService.Tabs;
    // });
  }
}
