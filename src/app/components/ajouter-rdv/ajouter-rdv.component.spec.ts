import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRDVComponent } from './ajouter-rdv.component';

describe('AjouterRDVComponent', () => {
  let component: AjouterRDVComponent;
  let fixture: ComponentFixture<AjouterRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
