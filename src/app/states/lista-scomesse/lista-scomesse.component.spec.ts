import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaScomesseComponent } from './lista-scomesse.component';

describe('ListaScomesseComponent', () => {
  let component: ListaScomesseComponent;
  let fixture: ComponentFixture<ListaScomesseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaScomesseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaScomesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
