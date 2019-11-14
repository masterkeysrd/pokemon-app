import { HttpClientModule } from '@angular/common/http';
import { MoveComponent } from './../info/move/move.component';
import { NgbTooltipModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MovesComponent } from './../info/moves/moves.component';
import { EvolutionChainComponent } from './../info/evolution-chain/evolution-chain.component';
import { StatComponent } from './../info/stat/stat.component';
import { CardComponent } from './../util/card/card.component';
import { SpritesComponent } from './../info/sprites/sprites.component';
import { TypeComponent } from './../info/type/type.component';
import { PokemonComponent } from './../pokemon/pokemon.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonDetailsComponent,
        PokemonComponent,
        TypeComponent,
        SpritesComponent,
        CardComponent,
        StatComponent,
        EvolutionChainComponent,
        MovesComponent,
        FaIconComponent,
        MoveComponent
      ],
      imports: [
        RouterTestingModule,
        NgbTooltipModule,
        NgbPaginationModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
