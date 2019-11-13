import { PokemonUtil } from '../../shared/utils/pokemon.util';
import { PokemonDetailsModel } from './../../shared/models/pokemon-details.model';
import { PokemonService } from './../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lx-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: PokemonDetailsModel;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.loadData(params.id)
    );
  }

  loadData(id: number) {
    this.pokemonService.getPokemon(id).subscribe(
      data => {
        this.pokemon = data;
        console.log(this.pokemon);
      }
    );
  }

  getImageUrl() {
    return PokemonUtil.getImageUrl(this.pokemon.id);
  }

}
