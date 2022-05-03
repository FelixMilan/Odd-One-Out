import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawHostComponent } from './draw-host.component';

describe('DrawHostComponent', () => {
  let component: DrawHostComponent;
  let fixture: ComponentFixture<DrawHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
