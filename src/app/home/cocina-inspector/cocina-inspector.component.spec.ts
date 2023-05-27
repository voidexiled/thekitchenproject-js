/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CocinaInspectorComponent } from './cocina-inspector.component';

describe('CocinaInspectorComponent', () => {
  let component: CocinaInspectorComponent;
  let fixture: ComponentFixture<CocinaInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CocinaInspectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinaInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
