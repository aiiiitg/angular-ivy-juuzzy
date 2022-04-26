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
  constructor(private router: Router, private eRef: ElementRef){} 

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
    console.log("View List");
    this.router.navigate(['']); //this.location.back();
  }
  openDetail(){
    console.log("View Detail item=" + this.item.id);
    this.router.navigate(['/item/'+ this.item.id]);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    // save editing on click outside the editable component
    if(this.view === 'list' && this.editable && !this.eRef.nativeElement.contains(event.target) && event.target.id!=("edit"+this.item.id)) {
      console.log(this.item.id +" "+ this.eRef.nativeElement +" "+ event.target.id)
      //this.saveItem(this.eRef.nativeElement.id); //editedItem.value);
    }
  }
}
