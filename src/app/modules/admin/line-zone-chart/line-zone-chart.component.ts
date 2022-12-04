import { Component, Input, OnChanges } from '@angular/core';
import { ILoadedEventArgs, ChartTheme, load } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-line-zone-chart',
  templateUrl: './line-zone-chart.component.html',
  styleUrls: ['./line-zone-chart.component.scss']
})
export class LineZoneChartComponent implements OnChanges {
  @Input() id = ''
  @Input() data
  @Input() yName
  @Input() xName;
  @Input() header
  @Input() min
  @Input() max
  @Input() loading = true;

  ngOnChanges() {
    if (this.data && this.data.length) {
      let hourMax = parseInt(this.max['hour']);
      let hourMin = parseInt(this.min['hour'])
      this.primaryXAxis = {
        maximum: hourMax,
        minimum: hourMin,
        interval: Math.ceil((hourMax - hourMin) / 8),
        valueType: 'Double',

      };
      //Initializing Primary Y Axis
      let max = parseFloat(this.max['amount']);
      let min = parseFloat(this.min['amount'])
      this.primaryYAxis = {
        labelFormat: '{value}',
        rangePadding: 'None',
        maximum: max,
        minimum: min,
        interval: Math.ceil((max - min) / 8),
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      };
      this.loading = false

    }
    this.tooltip = {
      enable: true, shared: true,
      header: `<b>Sales Amount for hour</b>`,
      format: '${point.x} : <b>${point.y}</b>'
    };

    this.title = 'Sales Amount By Hour'
  }

  //Initializing Primary X Axis
  public primaryXAxis: Object
  //Initializing Primary Y Axis
  public primaryYAxis: Object
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public width: string = Browser.isDevice ? '100%' : '90%';
  public legend: Object = { visible: false };
  public segments: Object[] = [{
    value: 450,
    color: 'red'
  }, {
    value: 500,
    color: 'green'
  }, {
    color: 'blue'
  }];
  public tooltip: Object
  public load(args: ILoadedEventArgs): void {
    // custom code start
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    // custom code end
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    if (selectedTheme === 'highcontrast') {
      args.chart.series[0].segments[0].color = '#FF4741';
      args.chart.series[0].segments[1].color = '#00B400';
      args.chart.series[0].segments[2].color = '#3F9BFF';
    }
  };
  public title
  constructor() {
    //code
  };
}
