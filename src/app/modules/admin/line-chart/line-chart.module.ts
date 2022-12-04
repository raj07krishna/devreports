import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart.component';
import { AccumulationChartAllModule, ChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';



@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule
  ],
  exports: [LineChartComponent]
})
export class LineChartModule { }
