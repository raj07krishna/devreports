import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineZoneChartComponent } from './line-zone-chart.component';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    LineZoneChartComponent
  ],
  imports: [
    CommonModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    MatProgressSpinnerModule

  ],
  exports: [LineZoneChartComponent]

})
export class LineZoneChartModule { }
