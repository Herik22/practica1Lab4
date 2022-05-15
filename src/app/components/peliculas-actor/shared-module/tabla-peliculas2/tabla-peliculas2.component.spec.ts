import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeliculas2Component } from './tabla-peliculas2.component';

describe('TablaPeliculas2Component', () => {
  let component: TablaPeliculas2Component;
  let fixture: ComponentFixture<TablaPeliculas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPeliculas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPeliculas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
