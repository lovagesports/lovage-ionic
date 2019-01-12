import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDetailPage } from './field-detail.page';

describe('FieldDetailPage', () => {
  let component: FieldDetailPage;
  let fixture: ComponentFixture<FieldDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
