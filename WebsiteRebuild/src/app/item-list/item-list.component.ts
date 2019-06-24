import { Component, Input,, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/Items.model';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemService]
})
export class ItemListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(private router: Router, private itemService: ItemService) { }

  items: Item[] = [];

    goToDetailPage(clickedItem: Item) {
      this.router.navigate(['items', clickedItem.id])
    }

   @Output() clickSender = new EventEmitter();


  ngOnInit() {
     this.items = this.itemService.getItems();
  }
  selectedItem = null;
    open(currentItem){
      this.selectedItem = currentItem;
    }

}
