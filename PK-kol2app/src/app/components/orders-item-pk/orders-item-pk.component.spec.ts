import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemPKComponent } from './orders-item-pk.component';

describe('OrdersItemPKComponent', () => {
  let component: OrdersItemPKComponent;
  let fixture: ComponentFixture<OrdersItemPKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemPKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
