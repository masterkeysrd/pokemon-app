import { TypeModel } from './../../../shared/models/type.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
