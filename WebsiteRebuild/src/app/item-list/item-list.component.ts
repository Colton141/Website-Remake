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

  items: Item[] = [
    new Item('Item1', 'erunt mollit anim id est laborum.', 12, 'class1', '5032285667', 1),
    new Item('itme2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 20, 'class2', '5038875584', 2),
    new Item('item3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 4, 'class1', '5039048009', 3)
    ];

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
