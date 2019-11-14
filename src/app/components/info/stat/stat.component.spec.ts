import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatComponent } from './stat.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

describe('StatComponent', () => {
  let component: StatComponent;
  let fixture: ComponentFixture<StatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatComponent, FaIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatComponent);
    component = fixture.componentInstance;
    component.stat = {
      base_stat: 10,
      description: 'none',
      effort: 0,
      name: 'none',
      url: 'none'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
