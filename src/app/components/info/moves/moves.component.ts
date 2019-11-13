import { Component, OnInit, Input } from '@angular/core';
import { MoveModel } from 'src/app/shared/models/move.model';

@Component({
  selector: 'lx-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {

  @Input() moves: Array<MoveModel>;

  page: number;
  pageSize: number;
  collectionSize: number;

  constructor() { }

  ngOnInit() {
    this.setConfig();
  }

  setConfig() {
    this.page = 1;
    this.pageSize = 24;
    this.collectionSize = this.moves.length;
  }

  getMoves() {
    return this.moves.slice((this.page - 1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
  }
}
