import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuario1Component } from './usuario1.component';

describe('Usuario1Component', () => {
  let component: Usuario1Component;
  let fixture: ComponentFixture<Usuario1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuario1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
