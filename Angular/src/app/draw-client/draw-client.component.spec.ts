import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawClientComponent } from './draw-client.component';

describe('DrawClientComponent', () => {
  let component: DrawClientComponent;
  let fixture: ComponentFixture<DrawClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
