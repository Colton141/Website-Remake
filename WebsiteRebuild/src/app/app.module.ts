import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskLisComponent } from './task-lis/task-lis.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
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
