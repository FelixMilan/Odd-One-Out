import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDrawerComponent } from './vote-drawer.component';

describe('VoteDrawerComponent', () => {
  let component: VoteDrawerComponent;
  let fixture: ComponentFixture<VoteDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
