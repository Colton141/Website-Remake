import { Component } from '@angular/core';

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
  selectedTask = null;
  items: Item[] = [
      new Item('Item1', 'A good item', 12, 'class1'),
      new Item('itme2', 'A good item', 20, 'class2'),
      new Item('item3', 'A good item', 4, 'class1')
    ];


    add(name, description, price, clas){
      let newItem: Fly = new Fly(name, description, price, clas);
      this.items.push(newItem);
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
