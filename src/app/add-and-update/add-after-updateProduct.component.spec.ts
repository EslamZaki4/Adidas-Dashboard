import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateComponent } from './add-and-update.component';

describe('AddAfterUpdateComponent', () => {
  let component: AddAndUpdateComponent;
  let fixture: ComponentFixture<AddAndUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAndUpdateComponent]
    });
    fixture = TestBed.createComponent(AddAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
