import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawStageComponent } from './draw-stage.component';

describe('DrawStageComponent', () => {
  let component: DrawStageComponent;
  let fixture: ComponentFixture<DrawStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
