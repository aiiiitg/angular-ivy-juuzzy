import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'ToDo List';

  constructor(public todoService: TodoService) {}
  ngOnInit() {
    this.todoService.addMockData();
  }
  
}
