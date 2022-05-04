import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingScreenHostComponent } from './writing-screen-host.component';

describe('WritingScreenHostComponent', () => {
  let component: WritingScreenHostComponent;
  let fixture: ComponentFixture<WritingScreenHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingScreenHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingScreenHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
