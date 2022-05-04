import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingScreenClientComponent } from './writing-screen-client.component';

describe('WritingScreenClientComponent', () => {
  let component: WritingScreenClientComponent;
  let fixture: ComponentFixture<WritingScreenClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingScreenClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingScreenClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
