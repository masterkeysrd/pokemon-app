import { PokemonService } from './../../../shared/services/pokemon.service';
import { MoveModel } from './../../../shared/models/move.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {

  @Input() name: string;
  move: MoveModel;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getMove(this.name).subscribe(
      res => (this.move = res)
    );
  }
}
