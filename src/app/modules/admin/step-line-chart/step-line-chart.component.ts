import { Component, Input, OnChanges } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-step-line-chart',
  templateUrl: './step-line-chart.component.html',
  styleUrls: ['./step-line-chart.component.scss']
})
export class StepLineChartComponent implements OnChanges {
  @Input() id = ''
  @Input() data
  @Input() yName
  @Input() xName
  @Input()loading = true;
  @Input() header;
  @Input() min
  @Input() max

  ngOnChanges() {
    if (this.data && this.data.length) {
      this.primaryXAxis = {
        labelFormat: 'MMM',
        intervalType: 'Days',
        maximum: this.max['date'],
        minimum: this.min['date'],
        majorGridLines: { width: 0 },
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift'
      };
      //Initializing Primary Y Axis
      this.primaryYAxis = {
        title: 'Sales Order by Date',
        lineStyle: { width: 0 },
        interval: Math.ceil((this.max['amount'] - this.min['amount']) / 8),
        majorTickLines: { width: 0 },
        labelFormat: '{value}'
      };
      this.loading = false
    }

    this.tooltip = {
      enable: true,
      header: `<b>Sales Amount By Date</b>`,
      shared: true,
      format: '${point.x} : <b> ${point.y} </b>',
    };
    this.title = `Sales Amount By Date`;
  }

  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public width: string = Browser.isDevice ? '100%' : '90%';
  //Initializing Primary X Axis
  public primaryXAxis
  //Initializing Primary Y Axis
  public primaryYAxis
  public marker: Object = {
    visible: true,
    width: 7,
    height: 7
  };
  public tooltip: Object
  public legend: Object = {
    visible: true,
    enableHighlight: true
  }
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  };
  // custom code end
  public title: string
  constructor() {
    //code
  };

}
