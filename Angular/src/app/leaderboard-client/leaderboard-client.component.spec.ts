import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardClientComponent } from './leaderboard-client.component';

describe('LeaderboardClientComponent', () => {
  let component: LeaderboardClientComponent;
  let fixture: ComponentFixture<LeaderboardClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
