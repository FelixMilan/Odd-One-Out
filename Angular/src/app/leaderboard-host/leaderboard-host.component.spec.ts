import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardHostComponent } from './leaderboard-host.component';

describe('LeaderboardHostComponent', () => {
  let component: LeaderboardHostComponent;
  let fixture: ComponentFixture<LeaderboardHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
