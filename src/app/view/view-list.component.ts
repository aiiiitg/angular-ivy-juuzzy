import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './view-list.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class ViewListComponent implements OnInit {
  add: boolean = false;
  items: Item[] = [];

  constructor(private route: ActivatedRoute, private eRef: ElementRef, public todoService: TodoService) {}
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

  addItem(title: string){
    return this.todoService.addItem(title);    
  }
  
  remove(item: Item) {
    return this.todoService.remove(item);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    // add on click outside the addable component
    if(this.add && !this.eRef.nativeElement.contains(event.target) && event.target.id!=("editAdd")) {
      console.log("Save on click-outside Add item [was editing id=editedAdd" + " hit id="+ event.target.id +"]")
      this.addItem((<HTMLInputElement>document.getElementById("editedAdd")).value);
    }
  }
}
