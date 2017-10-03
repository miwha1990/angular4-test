import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagiComponent } from './messagi.component';

describe('MessagiComponent', () => {
  let component: MessagiComponent;
  let fixture: ComponentFixture<MessagiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
