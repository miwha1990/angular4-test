import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlMioControComponent } from './il-mio-contro.component';

describe('IlMioControComponent', () => {
  let component: IlMioControComponent;
  let fixture: ComponentFixture<IlMioControComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlMioControComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlMioControComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
