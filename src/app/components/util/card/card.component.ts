import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title = '';
  @Input() backgroundHeaderClass = 'bg-primary';

  constructor() { }

  ngOnInit() {
  }

}
