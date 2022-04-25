import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.css' ]
})
export class ItemComponent {

  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();
  saveItem(description) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
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
