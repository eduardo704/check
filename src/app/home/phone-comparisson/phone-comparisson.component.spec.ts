import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneComparissonComponent } from './phone-comparisson.component';

describe('PhoneComparissonComponent', () => {
  let component: PhoneComparissonComponent;
  let fixture: ComponentFixture<PhoneComparissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneComparissonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneComparissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
