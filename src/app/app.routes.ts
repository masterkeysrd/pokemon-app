import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    component: PokemonListComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
  }
];
