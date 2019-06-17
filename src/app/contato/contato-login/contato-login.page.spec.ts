import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoLoginPage } from './contato-login.page';

describe('ContatoLoginPage', () => {
  let component: ContatoLoginPage;
  let fixture: ComponentFixture<ContatoLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
