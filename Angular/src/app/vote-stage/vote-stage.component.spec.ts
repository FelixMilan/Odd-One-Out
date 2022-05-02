import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteStageComponent } from './vote-stage.component';

describe('VoteStageComponent', () => {
  let component: VoteStageComponent;
  let fixture: ComponentFixture<VoteStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
