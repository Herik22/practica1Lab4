import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActor2Component } from './tabla-actor2.component';

describe('TablaActor2Component', () => {
  let component: TablaActor2Component;
  let fixture: ComponentFixture<TablaActor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaActor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
