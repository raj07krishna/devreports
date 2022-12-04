import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RounderColumnChartComponent } from './rounder-column-chart.component';
import { AccumulationChartAllModule, CategoryService, ChartAllModule, ChartModule, ColumnSeriesService, DataLabelService, LegendService, LineSeriesService, RangeNavigatorAllModule, TooltipService } from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [
    RounderColumnChartComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule
  ],
  providers: [ColumnSeriesService, LineSeriesService, LegendService, TooltipService, DataLabelService, CategoryService],
  exports:[RounderColumnChartComponent]
})
export class RounderColumnChartModule { }
