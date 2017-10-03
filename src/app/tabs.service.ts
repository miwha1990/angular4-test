import { Injectable } from '@angular/core';

@Injectable()
export class TabsService {
  tabs;
  constructor() {}
  set Tabs(tabs) {
      this.tabs = tabs;
  }
  get Tabs() {
    return this.tabs;
  }
}
