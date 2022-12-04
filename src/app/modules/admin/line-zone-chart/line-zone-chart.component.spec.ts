import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineZoneChartComponent } from './line-zone-chart.component';

describe('LineZoneChartComponent', () => {
  let component: LineZoneChartComponent;
  let fixture: ComponentFixture<LineZoneChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineZoneChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineZoneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
