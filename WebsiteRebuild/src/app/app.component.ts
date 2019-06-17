import { Component } from '@angular/core';
import { Item } from './models/Items.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Market Place';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedItemk = null;
  items: Item[] = [
      new Item('Item1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 12, 'class1'),
      new Item('itme2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 20, 'class2'),
      new Item('item3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 4, 'class1')
    ];




    open(clickedItem){
      this.selectedItem = clickedItem;
    }


  }










    masterTaskList: Task[] = [
      new Task('Finish weekend Angular homework for Epicodus course', 'HIGH'),
      new Task('Begin brainstorming possible JavaScript group projects', 'MEDIUM'),
      new Task('Add README file to last few Angular repos on GitHub', 'MEDIUM')
    ];

    editTask(clickedTask) {
      this.selectedTask = clickedTask;
    }

    finishedEditing() {
      this.selectedTask = null;
    }
    addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
  }
