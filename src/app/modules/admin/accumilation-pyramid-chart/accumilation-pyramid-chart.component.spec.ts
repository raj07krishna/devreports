import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumilationPyramidChartComponent } from './accumilation-pyramid-chart.component';

describe('AccumilationPyramidChartComponent', () => {
  let component: AccumilationPyramidChartComponent;
  let fixture: ComponentFixture<AccumilationPyramidChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccumilationPyramidChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumilationPyramidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
