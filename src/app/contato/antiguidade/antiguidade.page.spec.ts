import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiguidadePage } from './antiguidade.page';

describe('AntiguidadePage', () => {
  let component: AntiguidadePage;
  let fixture: ComponentFixture<AntiguidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiguidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiguidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
