import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCustomerComponent } from './city-customer.component';

describe('CityCustomerComponent', () => {
  let component: CityCustomerComponent;
  let fixture: ComponentFixture<CityCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
