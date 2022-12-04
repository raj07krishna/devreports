import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { AccumulationChartComponent, AccumulationChart, IAccLoadedEventArgs, AccumulationTheme, IAccResizeEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-accumilation-pyramid-chart',
  templateUrl: './accumilation-pyramid-chart.component.html',
  styleUrls: ['./accumilation-pyramid-chart.component.scss']
})
export class AccumilationPyramidChartComponent implements OnChanges {

  @Input() dataValue
  @Input() yName
  @Input() xName
  @Input()loading = true

  data = []
  ngOnChanges() {

    if (this.dataValue && this.dataValue.length) {
      this.dataValue.map((element: any) => {
        this.data.push({
          ...element,
          DataLabelMappingName: element[`${this.xName}`] + ': ' + element[`${this.yName}`]
        })
      })
      this.loading = false
    }
  }
  @ViewChild('pyramid')
  public pyramid: AccumulationChartComponent | AccumulationChart;
  public dataLabel: Object = {
    name: 'DataLabelMappingName', visible: true, position: 'Inside', font: {
      fontWeight: '600'
    }
  };
  //Initializing Legend
  public legendSettings: Object = {
    visible: false,
    toggleVisibility: false,
  };
  // custom code start
  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
  };
  // custom code end
  public onChartResized(args: IAccResizeEventArgs): void {
    let bounds: ClientRect = document.getElementById('container').getBoundingClientRect();
    if (bounds.width < bounds.height) {
      args.accumulation.series[0].width = '80%';
      args.accumulation.series[0].height = '70%';
    } else {
      args.accumulation.series[0].width = '60%';
      args.accumulation.series[0].height = '80%';
    }
  };
  public neckWidth: string = '15%';
  public gapRatio: number = 0.03;
  public emptyPointSettings: Object = {
    fill: 'red', mode: 'Drop'
  };
  public explode: boolean = true;
  public tooltip: Object = { header: '', enable: true, format: '${point.x} : <b>${point.y}</b>' };
  public title: string = 'Sales Amount By Day';
  constructor() {
    //code
  };
}
