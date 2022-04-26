import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from "../item";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class ItemComponent {
  editable = false;
  constructor(private router: Router){} 

  @Input() item: Item;
  @Input() newItem: string;
  @Input() view: 'list' | 'detail' = 'list';
  @Output() remove = new EventEmitter<Item>();

  saveItem(title: string = "", detail: string = "", close: boolean = false){
    this.editable = false;
    if (title && title != ""){
      this.item.title = title;
    }
    if (detail && detail != ""){
      this.item.detail = detail;
    }
    if(close){
      this.openList();
    }
  }

  openList(){   
    this.router.navigate(['']); //this.location.back();
  }
  openDetail(){
    console.log("View Detail item=" + this.item.id);
    this.router.navigate(['/item/'+ this.item.id]);
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
