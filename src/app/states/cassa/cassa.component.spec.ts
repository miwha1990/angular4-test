import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassaComponent } from './cassa.component';

describe('CassaComponent', () => {
  let component: CassaComponent;
  let fixture: ComponentFixture<CassaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
