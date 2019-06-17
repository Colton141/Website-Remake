import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NewItemComponent } from './new-item/new-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskLisComponent,
    EditTaskComponent,
    NewTaskComponent,
    ItemListComponent,
    EditItemComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
