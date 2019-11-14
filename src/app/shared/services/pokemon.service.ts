import { PokemonUtil } from './../utils/pokemon.util';
import { PokemonModel } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokemonDetailsModel } from '../models/pokemon-details.model';
import { MoveModel } from '../models/move.model';
import { SpeciesModel } from '../models/species.model';
import { ChainModel } from '../models/chain.model';

const BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(query: any): Observable<PokemonModel[]> {
    return this.http.get(`${BASE_URL}/pokemon`, {params: query})
    .pipe(
      map((res: any) => res.results
      .map((pokemon: PokemonModel) => {
        pokemon.id = PokemonUtil.getIdFromUr(pokemon.url);
        return pokemon;
      })
    ));
  }

  get(id: number): Observable<PokemonDetailsModel> {
    return this.http.get<any>(`${BASE_URL}/pokemon/${id}`)
    .pipe(
      map((res: any) => {
        const types = res.types.map(type => {
          type = {
            slot: type.slot,
            name: type.type.name,
            url: type.type.url
          };
          return type;
        });
        const moves = res.moves.map(move => {
          return move.move;
        });
        const stats = res.stats.map(stat => {
          stat = {
            base_stat: stat.base_stat,
            effort: stat.effort,
            name: stat.stat.name,
            description: stat.stat.name.replace('-', ' '),
            url: stat.stat.url
          };
          return stat;
        });

        res.moves = moves;
        res.types = types;
        res.stats = stats;
        return res;
      })
    );
  }

  getMove(move: string): Observable<MoveModel> {
    return this.http.get<any>(`${BASE_URL}/move/${move}`)
    .pipe(
      map((res: any) => {
        res.name = res.name.replace('-', ' ');
        res.type = res.type.name;
        return res;
      })
    );
  }

  getSpecies(especies: string): Observable<SpeciesModel> {
    return this.http.get<any>(`${BASE_URL}/pokemon-species/${especies}`)
    .pipe(
      map((res: any) => {
        res.evolution_chain_id = PokemonUtil.getIdFromUr(res.evolution_chain.url);
        return res;
      }
    ));
  }

  getEvolutionChain(id: number): Observable<ChainModel> {
    return this.http.get<any>(`${BASE_URL}/evolution-chain/${id}`)
    .pipe(
      map((res: any) => {
        return res.chain;
      }
    ));
  }

  getEvolutionChainBySpecie(name: string): Observable<ChainModel> {
    return this.getSpecies(name)
    .pipe(
      mergeMap(species =>  this.getEvolutionChain(species.evolution_chain_id))
    );
  }
}
