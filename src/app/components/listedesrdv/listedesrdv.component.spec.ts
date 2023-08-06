import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesrdvComponent } from './listedesrdv.component';

describe('ListedesrdvComponent', () => {
  let component: ListedesrdvComponent;
  let fixture: ComponentFixture<ListedesrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedesrdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedesrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
