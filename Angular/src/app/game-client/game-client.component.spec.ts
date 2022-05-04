import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameClientComponent } from './game-client.component';

describe('GameClientComponent', () => {
  let component: GameClientComponent;
  let fixture: ComponentFixture<GameClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
