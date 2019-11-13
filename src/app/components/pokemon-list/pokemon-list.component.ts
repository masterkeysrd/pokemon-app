import { logging } from 'protractor';
import { PokemonService } from './../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'lx-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  offset: number;
  limit: number;
  pokemons: PokemonModel[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.setConfig();
    this.loadAll();
  }

  setConfig() {
    this.offset = 0;
    this.limit = 24;
  }

  loadAll() {
    const params = {
      offset: this.offset,
      limit: this.limit
    };
    this.pokemonService.getList(params).subscribe(
      data => (this.pokemons = data),
      error => (console.log(error))
    );
  }
}
