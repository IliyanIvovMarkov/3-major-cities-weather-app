import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInSevenDaysComponent } from './weather-in-seven-days.component';

describe('WeatherInSevenDaysComponent', () => {
  let component: WeatherInSevenDaysComponent;
  let fixture: ComponentFixture<WeatherInSevenDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInSevenDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInSevenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
