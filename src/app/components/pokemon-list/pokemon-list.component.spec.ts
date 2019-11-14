import { PokemonComponent } from './../pokemon/pokemon.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfiniteScrollModule, HttpClientTestingModule],
      declarations: [ PokemonListComponent, PokemonComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
