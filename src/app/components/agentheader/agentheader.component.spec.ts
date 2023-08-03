import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentheaderComponent } from './agentheader.component';

describe('AgentheaderComponent', () => {
  let component: AgentheaderComponent;
  let fixture: ComponentFixture<AgentheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
