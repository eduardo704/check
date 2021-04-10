/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhoneCardComponent } from './phone-card.component';

describe('PhoneCardComponent', () => {
  let component: PhoneCardComponent;
  let fixture: ComponentFixture<PhoneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
