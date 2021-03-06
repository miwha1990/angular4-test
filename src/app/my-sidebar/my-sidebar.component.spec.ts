import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySidebarComponent } from './my-sidebar.component';

describe('MySidebarComponent', () => {
  let component: MySidebarComponent;
  let fixture: ComponentFixture<MySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
