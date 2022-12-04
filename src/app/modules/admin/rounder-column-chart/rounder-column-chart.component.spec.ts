import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RounderColumnChartComponent } from './rounder-column-chart.component';

describe('RounderColumnChartComponent', () => {
  let component: RounderColumnChartComponent;
  let fixture: ComponentFixture<RounderColumnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RounderColumnChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RounderColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
