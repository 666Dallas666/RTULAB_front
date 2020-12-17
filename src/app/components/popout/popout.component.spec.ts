/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgbdPopoverBasic } from './popout.component';

describe('PopoutComponent', () => {
  let component: NgbdPopoverBasic;
  let fixture: ComponentFixture<NgbdPopoverBasic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdPopoverBasic ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdPopoverBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
