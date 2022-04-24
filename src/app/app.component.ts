import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'TodoList-Angular' + VERSION.major;
  title = 'ToDoList';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string){
    // unshift (to top), push (to end)
    this.allItems.unshift({
      description,
      done: false
    });
  }
  
  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
