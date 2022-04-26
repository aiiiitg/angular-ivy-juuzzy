import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from "../item";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class ItemComponent {
  view: 'list' | 'detail' = 'list';
  editable = false;
  constructor(private router: Router){} 

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();
  
  setView(view: 'list' | 'detail' = 'list'){
    this.view = view;
  }

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }

  openDetail(id: number){
    console.log("/item/" +id)
    this.router.navigate(['/item/'+ id]);
  }

  /* Abandon click outside code as taking too long, use simple tick/cross buttons ---
  @HostListener('document:click', ['$event'])
  clickout(event) {
    // save editing on click outside the editable component
    if(this.editable && !this.eRef.nativeElement.contains(event.target)) {
      this.saveItem(this.eRef.nativeElement.id); //editedItem.value);
    }
  }
  constructor(private eRef: ElementRef) {
  }
  */

}
