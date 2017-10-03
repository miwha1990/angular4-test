import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdrComponent } from './pdr.component';

describe('PdrComponent', () => {
  let component: PdrComponent;
  let fixture: ComponentFixture<PdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
