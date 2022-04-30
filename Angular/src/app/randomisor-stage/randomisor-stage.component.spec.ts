import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomisorStageComponent } from './randomisor-stage.component';

describe('RandomisorStageComponent', () => {
  let component: RandomisorStageComponent;
  let fixture: ComponentFixture<RandomisorStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomisorStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomisorStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
