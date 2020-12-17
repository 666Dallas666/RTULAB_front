/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgbdCollapseNavbar } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NgbdCollapseNavbar;
  let fixture: ComponentFixture<NgbdCollapseNavbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdCollapseNavbar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCollapseNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
