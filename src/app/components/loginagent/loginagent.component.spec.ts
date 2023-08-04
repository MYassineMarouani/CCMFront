import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginagentComponent } from './loginagent.component';

describe('LoginagentComponent', () => {
  let component: LoginagentComponent;
  let fixture: ComponentFixture<LoginagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
