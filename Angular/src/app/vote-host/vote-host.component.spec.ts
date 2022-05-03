import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteHostComponent } from './vote-host.component';

describe('VoteHostComponent', () => {
  let component: VoteHostComponent;
  let fixture: ComponentFixture<VoteHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
