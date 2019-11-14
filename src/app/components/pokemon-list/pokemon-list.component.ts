import { logging } from 'protractor';
import { PokemonService } from './../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'lx-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {

  offset: number;
  limit: number;
  pokemons: Array<PokemonModel> = new Array();

  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

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
    this.pokemonService.getAll(params).subscribe(
      data => (this.pokemons.push(...data)),
      error => (console.log(error))
    );
  }

  onScrollDown(ev?) {
    this.offset += this.limit;
    this.loadAll();
  }
}
