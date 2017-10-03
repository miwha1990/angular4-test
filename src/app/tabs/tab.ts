import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  styles: [`
    .pane{
      border: 1px solid #ddd;
      background: #fff;
      padding: 20px;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input('tabTitle') tabTitle: string;
  @Input() active = false;
}
