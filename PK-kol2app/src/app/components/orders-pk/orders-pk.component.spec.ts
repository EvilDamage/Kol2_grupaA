import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPKComponent } from './orders-pk.component';

describe('OrdersPKComponent', () => {
  let component: OrdersPKComponent;
  let fixture: ComponentFixture<OrdersPKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
