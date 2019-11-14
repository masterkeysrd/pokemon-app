import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TypeComponent } from './../type/type.component';
import { CardComponent } from './../../util/card/card.component';
import { MoveComponent } from './../move/move.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesComponent } from './moves.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('MovesComponent', () => {
  let component: MovesComponent;
  let fixture: ComponentFixture<MovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesComponent, MoveComponent, CardComponent, TypeComponent ],
      imports: [NgbPaginationModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesComponent);
    component = fixture.componentInstance;
    component.moves = [
      {
        name: 'none',
        type: 'nome',
        url: 'nome'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
