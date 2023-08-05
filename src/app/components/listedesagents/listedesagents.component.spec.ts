import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesagentsComponent } from './listedesagents.component';

describe('ListedesagentsComponent', () => {
  let component: ListedesagentsComponent;
  let fixture: ComponentFixture<ListedesagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedesagentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedesagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
