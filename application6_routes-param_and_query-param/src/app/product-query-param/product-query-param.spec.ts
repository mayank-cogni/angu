import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQueryParam } from './product-query-param';

describe('ProductQueryParam', () => {
  let component: ProductQueryParam;
  let fixture: ComponentFixture<ProductQueryParam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductQueryParam],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductQueryParam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
