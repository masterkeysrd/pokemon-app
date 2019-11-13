import { PokemonUtil } from '../../shared/utils/pokemon.util';
import { PokemonModel } from './../../shared/models/pokemon.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: PokemonModel;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl() {
    return PokemonUtil.getImageUrl(this.pokemon.id);
  }
}
