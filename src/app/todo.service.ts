import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  allItems = new Array();
  filter: 'all' | 'active' | 'done' = 'all';

  constructor(/*private messageService: MessageService*/) { }

  addMockData(){
    // populate items list with mock data
    this.allItems.push({ description: 'eat', done: true });
    this.allItems.push({ description: 'sleep', done: false });
    this.allItems.push({ description: 'play', done: false });
    this.allItems.push({ description: 'laugh', done: false });
  }

  getItems(): Observable<Item[]> {
    const items = of(this.allItems);
    console.log(this.allItems.length);

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
  /*
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }*/
}