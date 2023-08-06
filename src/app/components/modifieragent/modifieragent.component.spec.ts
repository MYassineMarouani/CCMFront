import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieragentComponent } from './modifieragent.component';

describe('ModifieragentComponent', () => {
  let component: ModifieragentComponent;
  let fixture: ComponentFixture<ModifieragentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieragentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
