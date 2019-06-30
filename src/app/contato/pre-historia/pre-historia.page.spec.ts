import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreHistoriaPage } from './pre-historia.page';

describe('PreHistoriaPage', () => {
  let component: PreHistoriaPage;
  let fixture: ComponentFixture<PreHistoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreHistoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreHistoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
