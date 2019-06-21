import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/Items.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  constructor(private router: Router) { }

  items: Item[] = [];

    goToDetailPage(clickedItem: Item) {
      this.router.navigate(['items', clickedItem.id])
    }

   @Output() clickSender = new EventEmitter();


  ngOnInit() {
  }
  selectedItem = null;
    open(currentItem){
      this.selectedItem = currentItem;
    }

}
