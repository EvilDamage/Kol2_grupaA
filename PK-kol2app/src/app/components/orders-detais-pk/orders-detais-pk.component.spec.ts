import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetaisPKComponent } from './orders-detais-pk.component';

describe('OrdersDetaisPKComponent', () => {
  let component: OrdersDetaisPKComponent;
  let fixture: ComponentFixture<OrdersDetaisPKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetaisPKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetaisPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
