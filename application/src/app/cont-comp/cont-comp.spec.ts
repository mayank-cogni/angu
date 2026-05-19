import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContComp } from './cont-comp';

describe('ContComp', () => {
  let component: ContComp;
  let fixture: ComponentFixture<ContComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ContComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
