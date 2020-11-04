import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPersonFormComponent } from './real-person-form.component';

describe('RealPersonFormComponent', () => {
  let component: RealPersonFormComponent;
  let fixture: ComponentFixture<RealPersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealPersonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
