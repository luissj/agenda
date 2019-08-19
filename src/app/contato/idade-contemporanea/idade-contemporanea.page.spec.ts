import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadeContemporaneaPage } from './idade-contemporanea.page';

describe('IdadeContemporaneaPage', () => {
  let component: IdadeContemporaneaPage;
  let fixture: ComponentFixture<IdadeContemporaneaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdadeContemporaneaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdadeContemporaneaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
