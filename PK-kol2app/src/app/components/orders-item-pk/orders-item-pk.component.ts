import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-pk',
  templateUrl: './orders-item-pk.component.html',
  styleUrls: ['./orders-item-pk.component.css']
})
export class OrdersItemPKComponent implements OnInit {

  @Input() image?: string;
  @Input() title?: string;
  @Input() id?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
