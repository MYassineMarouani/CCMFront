import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRDVsComponent } from './mes-rdvs.component';

describe('MesRDVsComponent', () => {
  let component: MesRDVsComponent;
  let fixture: ComponentFixture<MesRDVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesRDVsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesRDVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
