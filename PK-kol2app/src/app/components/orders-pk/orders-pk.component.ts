import { Component, OnInit } from '@angular/core';
import {PKDataService} from "../../services/pk-data.service";

@Component({
  selector: 'app-orders-pk',
  templateUrl: './orders-pk.component.html',
  styleUrls: ['./orders-pk.component.css']
})
export class OrdersPKComponent implements OnInit {

  public items$: any;

  constructor(private service: PKDataService) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
