import { Component, OnInit } from '@angular/core';
//import { Location } from '@angular/common';
import { Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, public todoService: TodoService) {}
  ngOnInit() {
    // observable below - can also use snapshot (this.route.snapshot.params.id)
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'));
    });

    this.todoService.getItem(this.id)
        .subscribe(item => this.item = item);
  }
  goBack(){
    this.router.navigate(['']); //this.location.back();
  }
  remove(item: Item) {
    this.todoService.remove(item);
    this.goBack();
  }
}