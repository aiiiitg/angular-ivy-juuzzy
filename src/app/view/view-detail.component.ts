import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item';
import { TodoService } from '../todo.service';
//import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  template: `
  <button class="btn" (click)="goBack()"><mat-icon aria-hidden="false" aria-label="Back">arrow_back_ios</mat-icon></button>
  <h1>This is {{ id }}'s profile!</h1>`,
  styleUrls: [ '../app.component.css' ]
})
export class ViewDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private location: Location, public todoService: TodoService) {}
  ngOnInit() {
    // snapshot way
    console.log('thing', this.route.snapshot.params.id);

    // observable way
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = parseInt(params.get('id'));
    });
  }
  goBack(){
    this.location.back();
  }
}