import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './view-list.component.html',
  styleUrls: [ './view-list.component.css' ]
})
export class ViewListComponent implements OnInit {
  items: Item[] = [];

  constructor(private route: ActivatedRoute, public todoService: TodoService) {}
  ngOnInit() {
    this.getItems();
  }

  setFilter(filter: 'all' | 'active' | 'done' = 'all'){
    this.todoService.filter = filter;
  }

  getFilter(){
    return this.todoService.filter;
  }

  getItems(): void {
    this.todoService.getItems()
        .subscribe(items => this.items = items);
  }
  
  countItems(filter: string) {
    return this.todoService.countItems(filter);
  }

  addItem(description: string){
    return this.todoService.addItem(description);    
  }
  
  remove(item) {
    return this.todoService.remove(item);
  }
}
