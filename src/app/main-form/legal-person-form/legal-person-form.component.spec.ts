import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPersonFormComponent } from './legal-person-form.component';

describe('LegalPersonFormComponent', () => {
  let component: LegalPersonFormComponent;
  let fixture: ComponentFixture<LegalPersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalPersonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
