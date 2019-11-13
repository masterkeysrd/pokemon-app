import { PokemonService } from './shared/services/pokemon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { AppRoutingModule } from './app-routing.module';
import { TypeComponent } from './components/info/type/type.component';
import { SpritesComponent } from './components/info/sprites/sprites.component';
import { MoveComponent } from './components/info/move/move.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MovesComponent } from './components/info/moves/moves.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    TypeComponent,
    SpritesComponent,
    MoveComponent,
    MovesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }