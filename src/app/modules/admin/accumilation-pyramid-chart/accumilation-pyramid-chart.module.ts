import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumilationPyramidChartComponent } from './accumilation-pyramid-chart.component';
import { AccumulationChartModule, PyramidSeriesService, AccumulationTooltipService, DataLabelService, AccumulationChartAllModule, ChartAllModule, RangeNavigatorAllModule, CategoryService } from '@syncfusion/ej2-angular-charts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AccumilationPyramidChartComponent
  ],
  imports: [
    CommonModule,
    AccumulationChartModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    MatProgressSpinnerModule

  ],
  providers: [AccumulationTooltipService, DataLabelService, CategoryService, PyramidSeriesService],
  exports: [AccumilationPyramidChartComponent]
})
export class AccumilationPyramidChartModule { }
