import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadeMediaPage } from './idade-media.page';

describe('IdadeMediaPage', () => {
  let component: IdadeMediaPage;
  let fixture: ComponentFixture<IdadeMediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdadeMediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdadeMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
