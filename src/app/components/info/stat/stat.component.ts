import { StatModel } from './../../../shared/models/stat.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  iconList = {
    hp: 'heart',
    attack: 'link',
    defense: 'shield-alt',
    'special-attack': 'star',
    'special-defense': 'star',
    speed: 'asterisk'
  };

  @Input() stat: StatModel;

  constructor() { }

  ngOnInit() {
  }

  getIcon() {
    return this.iconList[this.stat.name];
  }

}
