import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EvolutionChainComponent } from './evolution-chain.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

describe('EvolutionChainComponent', () => {
  let component: EvolutionChainComponent;
  let fixture: ComponentFixture<EvolutionChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbTooltipModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ EvolutionChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionChainComponent);
    component = fixture.componentInstance;
    component.evolutions = new Set();
    component.species = {
      id: 1,
      name: 'none',
      evolution_chain_id: 1,
      url: 'none'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
