import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteClientComponent } from './vote-client.component';

describe('VoteClientComponent', () => {
  let component: VoteClientComponent;
  let fixture: ComponentFixture<VoteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
