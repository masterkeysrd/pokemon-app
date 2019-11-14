import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    component.pokemon = {
      id: 1,
      name: 'none',
      url: '//////1'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
