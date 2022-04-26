import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item';
import { TodoService } from '../todo.service';
//import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  templateUrl: './view-detail.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class ViewDetailComponent implements OnInit {
  id: number;
  item: Item;

  constructor(private route: ActivatedRoute, private location: Location, public todoService: TodoService) {}
  ngOnInit() {
    // snapshot way
    console.log('thing', this.route.snapshot.params.id);

    // observable way
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = parseInt(params.get('id'));
    });

    this.item = this.todoService.getItem(this.id)
  }
  goBack(){
    this.location.back();
  }
}