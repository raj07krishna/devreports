import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLineChartComponent } from './step-line-chart.component';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    StepLineChartComponent
  ],
  imports: [
    CommonModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    MatProgressSpinnerModule
  ],
  exports: [StepLineChartComponent]

})
export class StepLineChartModule { }
