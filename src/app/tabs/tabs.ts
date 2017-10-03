import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab';
import { TabsService } from '../tabs.service';
@Component({
  selector: 'app-tabs',
  template: `
    <ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <span>{{tab.tabTitle}}</span>
      </li>
    </ul>
    <ng-content></ng-content>,
  `,
  styleUrls: ['./tabs.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor(private tabsService: TabsService) {}
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);
    this.tabsService.Tabs = this.tabs;
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
