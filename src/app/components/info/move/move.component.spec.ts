import { HttpClientModule } from '@angular/common/http';
import { TypeComponent } from './../type/type.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveComponent } from './move.component';

describe('MoveComponent', () => {
  let component: MoveComponent;
  let fixture: ComponentFixture<MoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveComponent, TypeComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
