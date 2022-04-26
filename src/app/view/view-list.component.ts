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

  addItem(description: string){
    return this.todoService.addItem(description);    
  }
  
  remove(item: Item) {
    return this.todoService.remove(item);
  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    // save editing on click outside the editable component
    if(this.view === 'list' && this.editable && !this.eRef.nativeElement.contains(event.target) && event.target.id!=("edit"+this.item.id)) {
      console.log("Save on click-outside item [was editing id="+ this.item.id /*+" "+ this.eRef.nativeElement*/ +" hit id="+ event.target.id +"]")
      this.saveItem((<HTMLInputElement>document.getElementById("edited"+this.item.id)).value);
    }
  }
}
