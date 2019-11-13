import { Sprite } from './../../../shared/utils/sprites';
import { PokemonUtil } from './../../../shared/utils/pokemon.util';
import { SpritesModel } from './../../../shared/models/sprites.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-sprites',
  templateUrl: './sprites.component.html',
  styleUrls: ['./sprites.component.css']
})
export class SpritesComponent implements OnInit {

  @Input() sprites: SpritesModel;

  constructor() { }

  ngOnInit() {
  }

  getSpriteList(): Sprite[] {
    return PokemonUtil.getSpriteList(this.sprites).sort(PokemonUtil.getSpriteComparator());
  }
}
