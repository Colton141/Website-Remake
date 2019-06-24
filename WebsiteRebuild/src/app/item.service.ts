import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Item } from './item-list.model';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {
    items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.items = database.list('items');
}

  getItems() {
  return this.items;
  }

  getItemById(itemId: number){
   for (var i = 0; i <= ITEMS.length - 1; i++) {
     if (ITEMS[i].id === itemId) {
       return ITEMS[i];
     }
   }
 }
}
