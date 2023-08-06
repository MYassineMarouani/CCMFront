import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDVdetailsComponent } from './rdvdetails.component';

describe('RDVdetailsComponent', () => {
  let component: RDVdetailsComponent;
  let fixture: ComponentFixture<RDVdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDVdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDVdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
