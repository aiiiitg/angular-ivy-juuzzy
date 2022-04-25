import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { item } from './item';
//import { HEROES } from './mock-heroes';
//import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  allItems = new Array();
  filter: 'all' | 'active' | 'done' = 'all';

  constructor(/*private messageService: MessageService*/) { }

  ngOnInit(){
    // populate items list with mock data
    this.allItems.push({ description: 'eat', done: true });
    this.allItems.push({ description: 'sleep', done: false });
    this.allItems.push({ description: 'play', done: false });
    this.allItems.push({ description: 'laugh', done: false });
  }

  getItems(): Observable<item[]> {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
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