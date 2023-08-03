import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsidebarComponent } from './agentsidebar.component';

describe('AgentsidebarComponent', () => {
  let component: AgentsidebarComponent;
  let fixture: ComponentFixture<AgentsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
