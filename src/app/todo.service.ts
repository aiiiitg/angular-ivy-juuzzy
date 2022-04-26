import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  allItems = new Array();
  filter: 'all' | 'active' | 'done' = 'all';
  idIncrement = 0;

  constructor() { }

  addMockData(){
    // populate items list with mock data
    this.allItems.push({ id: 1, done: true, title: "List Todos", detail: "As a user I would like to list my current todos." });
    this.allItems.push({ id: 2, done: false, title: "Change Todo states", detail: "As a user I would like to change a todo state by checking a 'box'." });
    this.allItems.push({ id: 3, done: false, title: "Add Todo detail", detail: "As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view)." });
    this.allItems.push({ id: 4, done: false, title: "Add a new Todo", detail: "As a user I would like to add a new todo in my list." });
    this.allItems.push({ id: 5, done: false, title: "Check yo' self", detail: "Are these Todos too meta ? ;)" });
  }

  getItem(id: number): Observable<Item> {
    for(let item of this.allItems){
      if(item.id === id){
        return of(item);
      }
    }
    return null;
  }

  getItems(): Observable<Item[]> {
    const items = of(this.allItems);
    for(let item of this.allItems){
      if(item.id > this.idIncrement){
        this.idIncrement = item.id;
      }
    }
    this.idIncrement++;
    /*
    if (this.filter === 'all') {
      items = of(this.allItems);
    }
    else{
      items = of(this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done));
    }*/
    return items;
  }

  countItems(filter: string) {
    if (filter === 'all') {
      return this.allItems.length;
    }
    return this.allItems.filter(item => filter === 'done' ? item.done : !item.done).length;
  }

  addItem(title: string){
    // unshift (to top), push (to end)
    this.allItems.unshift({
      id: this.idIncrement,
      done: false,
      title: title,
      detail: ""
    });
    this.idIncrement++;
    console.log("Added item "+ this.allItems[this.idIncrement-1]);
  }
  
  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}