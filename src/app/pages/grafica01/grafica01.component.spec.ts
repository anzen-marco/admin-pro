import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica01Component } from './grafica01.component';

describe('Grafica01Component', () => {
  let component: Grafica01Component;
  let fixture: ComponentFixture<Grafica01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafica01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafica01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
