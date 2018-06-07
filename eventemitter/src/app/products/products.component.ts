import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  username: string;

  @Output() outputEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendOutEvent(){
    this.outputEvent.emit(this.username);
  }

}
