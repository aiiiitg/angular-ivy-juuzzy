import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './view-list.component.html',
  styleUrls: [ './view-list.component.css' ]
})
export class ViewListComponent implements OnInit {  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
