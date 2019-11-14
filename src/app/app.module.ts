import { ICON_LYBRARY } from './shared/utils/icons-library';
import { PokemonService } from './shared/services/pokemon.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { StatComponent } from './components/info/stat/stat.component';

import { NgxLoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/util/card/card.component';
import { EvolutionChainComponent } from './components/info/evolution-chain/evolution-chain.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    TypeComponent,
    SpritesComponent,
    MoveComponent,
    MovesComponent,
    NavbarComponent,
    StatComponent,
    CardComponent,
    EvolutionChainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxLoadingModule.forRoot({}),
    InfiniteScrollModule,
    FontAwesomeModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...ICON_LYBRARY);
  }
}
