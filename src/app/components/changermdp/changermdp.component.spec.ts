import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangermdpComponent } from './changermdp.component';

describe('ChangermdpComponent', () => {
  let component: ChangermdpComponent;
  let fixture: ComponentFixture<ChangermdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangermdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangermdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
