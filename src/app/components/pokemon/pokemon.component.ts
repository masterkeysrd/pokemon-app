import { PokemonUtil } from '../../shared/utils/pokemon.util';
import { PokemonModel } from './../../shared/models/pokemon.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

@Component({
  selector: 'lx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: PokemonModel;
  textColor = '#fff';
  backgroundColor = '#000';

  constructor(private router: Router) { }

  ngOnInit() {
    this.getVibrantColor(this.getImageUrl());
  }

  getImageUrl() {
    return PokemonUtil.getImageUrl(this.pokemon.id);
  }

  navigateToDetails() {
    this.router.navigate(['pokemon', this.pokemon.id]);
  }

  getVibrantColor(url: string) {
    // Using builder
    Vibrant.from(url).getPalette((err, palette) => {
      this.setColor(palette.DarkVibrant);
    });
  }

  setColor(color: any) {
    this.backgroundColor = color.hex;
    this.textColor = color.titleTextColor;
  }
}
