import { TypeModel } from './../models/type.model';
import { PokemonModel } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokemonDetailsModel } from '../models/pokemon-details.model';
import { MoveModel } from '../models/move.model';

const BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(query: any) {
    return this.http.get(`${BASE_URL}/pokemon`, {params: query})
    .pipe(
      map((res: any) => res.results
      .map((pokemon: PokemonModel) => {
        pokemon.id = Number(pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''));
        return pokemon;
      })
    ));
  }

  get(id: number): Observable<PokemonDetailsModel> {
    return this.http.get<PokemonDetailsModel>(`${BASE_URL}/pokemon/${id}`)
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

        res.moves = moves;
        res.types = types;
        return res;
      })
    );
  }

  getMove(move: string): Observable<MoveModel> {
    return this.http.get<MoveModel>(`${BASE_URL}/move/${move}`)
    .pipe(
      map((res: any) => {
        res.name = res.name.replace('-', ' ');
        res.type = res.type.name;
        return res;
      })
    );
  }
}