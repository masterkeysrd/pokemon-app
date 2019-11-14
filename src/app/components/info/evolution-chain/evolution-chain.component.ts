import { PokemonUtil } from './../../../shared/utils/pokemon.util';
import { ChainModel } from './../../../shared/models/chain.model';
import { map, mergeMap } from 'rxjs/operators';
import { PokemonService } from './../../../shared/services/pokemon.service';
import { SpeciesModel } from './../../../shared/models/species.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.css']
})
export class EvolutionChainComponent implements OnInit {

  @Input() species: SpeciesModel;
  evolutions: Set<SpeciesModel> = new Set();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.pokemonService.getSpecies(this.species.name)
    .pipe(mergeMap(species => this.pokemonService.getEvolutionChain(species.evolution_chain_id))
    )
    .subscribe(res => {
      this.addEvolution(res);
      console.log(this.evolutions);
    });
  }

  addEvolution(chain: ChainModel) {
    this.addToList(chain.species);
    for (const evolve of chain.evolves_to) {
      this.addToList(evolve.species);
      if (evolve.evolves_to) {
        this.addEvolution(evolve);
      }
    }
  }

  addToList(species: SpeciesModel) {
    console.log(species);
    species.id = PokemonUtil.getIdFromUr(species.url);
    this.evolutions.add(species);
  }

  getImageUrl(id: number)  {
    return PokemonUtil.getImageUrl(id);
  }
}
