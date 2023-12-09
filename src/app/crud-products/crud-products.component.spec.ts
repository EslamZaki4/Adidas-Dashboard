import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProductsComponent } from './crud-products.component';

describe('CrudProductsComponent', () => {
  let component: CrudProductsComponent;
  let fixture: ComponentFixture<CrudProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudProductsComponent]
    });
    fixture = TestBed.createComponent(CrudProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
