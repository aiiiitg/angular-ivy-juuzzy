import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item';
import { TodoService } from '../todo.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  template: `<h1>This is {{ username }}'s profile!</h1>`
})
export class ViewDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, public todoService: TodoService) {}
  ngOnInit() {
    // snapshot way
    console.log('thing', this.route.snapshot.params.id);

    // observable way
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    });
  }
}



  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // snapshot way
    console.log('thing', this.route.snapshot.params.username);

    // observable way
    this.route.paramMap.subscribe(params => {
      console.log(params.get('username'));
      this.username = params.get('username');
    });
  }

}
