import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApperanceComponent } from './apperance.component';

describe('ApperanceComponent', () => {
  let component: ApperanceComponent;
  let fixture: ComponentFixture<ApperanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApperanceComponent]
    });
    fixture = TestBed.createComponent(ApperanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
