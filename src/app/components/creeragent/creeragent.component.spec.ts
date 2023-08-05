import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeragentComponent } from './creeragent.component';

describe('CreeragentComponent', () => {
  let component: CreeragentComponent;
  let fixture: ComponentFixture<CreeragentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeragentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
