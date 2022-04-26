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
    this.allItems.push({ id: 1, description: 'eat', done: true });
    this.allItems.push({ id: 2, description: 'sleep', done: false });
    this.allItems.push({ id: 3, description: 'play', done: false });
    this.allItems.push({ id: 4, description: 'laugh', done: false });
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

  addItem(description: string){
    // unshift (to top), push (to end)
    this.allItems.unshift({
      id: this.idIncrement,
      description,
      done: false
    });
    this.idIncrement++;
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