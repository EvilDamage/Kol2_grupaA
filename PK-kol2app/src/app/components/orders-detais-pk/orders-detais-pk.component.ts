import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PKDataService} from "../../services/pk-data.service";

@Component({
  selector: 'app-orders-detais-pk',
  templateUrl: './orders-detais-pk.component.html',
  styleUrls: ['./orders-detais-pk.component.css']
})
export class OrdersDetaisPKComponent implements OnInit {

  public image = '';
  public text?: string;
  public title?: string;
  public id?: string | undefined;

  constructor(private dataService: PKDataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: string | null;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
        this.dataService.getById(id).subscribe((res: any) => {
          this.image = res['image'];
          this.text = res['text'];
          this.title = res['title'];
        });
      });
  }

}
