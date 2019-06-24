import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Items.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, price: string, clas: string) {
  var newItem: Item = new Item(name, description, price, clas);
  console.log(newItem);
}

}
