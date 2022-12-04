import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { ToolbarItems, FilterSettingsModel, GridComponent, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { CommonService } from '../../../services/common.service';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY/MM/DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },

        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
})
export class ExampleComponent implements OnInit {
    public ordersDataSource!: object[];
    public loadingIndicator: any;
    public toolbarOptions: ToolbarItems[] = ['ExcelExport', 'ColumnChooser'];
    public filterOption: FilterSettingsModel = { type: 'Excel' };
    @ViewChild('grid') public grid!: GridComponent;
    storesData = [];
    registerData = [];
    orderTypesData: any[] = [];
    paymentTypesData = [];
    filterForm: FormGroup;
    summaryData: any;
    pyramidData: any;
    pyramidXName;
    pyramidYName;
    stepLineData: any;
    stepLineXName;
    stepLineYName;
    stepLineMinData;
    stepLineMaxData;
    lineZoneData: any;
    lineZoneXName;
    lineZoneYName;
    lineZoneMinData;
    lineZoneMaxData;
    // set the MultiSelect popup height
    public popHeight: string = '350px';
    loadingStepLine= true;
    loadingLineZone= true;
    loadingPyramid= true;
    summaryLoading = true

    constructor(private common: CommonService) {
        this.initialiseForm();
        console.log(this.filterForm)
    }

    initialiseForm() {
        this.filterForm = new FormGroup(
            {
                store: new FormControl([]),
                register: new FormControl([]),
                orderStatus: new FormControl([]),
                paymentMethod: new FormControl([]),
                range: new FormGroup({
                    startdate: new FormControl<Date | null>(null),
                    enddate: new FormControl<Date | null>(null),
                })
            }
        )
    }

    ngOnInit(): void {
        this.common.getStoreData().subscribe((data: any) => {
            this.storesData = data;
            console.log(data)
        })
        this.common.getOrderTypesData().subscribe((data: any) => {
            this.orderTypesData = data
            console.log(data)
        })
        this.common.getPayementTypesData().subscribe((data: any) => {
            this.paymentTypesData = data;
            console.log(data)
        })
        this.common.getRegisterData().subscribe((data: any) => {
            this.registerData = data;
            console.log('register', data)
        })
        this.allApICall({})
    }

    allApICall(params) {
        this.loadingIndicator = { indicatorType: 'Shimmer' };
        this.loadingStepLine = true;
        this.loadingLineZone = true;
        this.loadingPyramid = true;
        this.summaryLoading = true
        this.common.getOrdersData(params).subscribe((data: any) => {
            this.ordersDataSource = data;
            console.log('table', data)
        })
        this.common.getOrdersBestDayData(params).subscribe((data: any) => {
            this.stepLineData = data.data;
            this.stepLineMinData = data.min;
            this.stepLineMaxData = data.max;
            this.stepLineXName = 'sales_order_date';
            this.stepLineYName = 'sales_order_amount';
            this.loadingStepLine = false;

            console.log('graph 1', data)
        })
        this.common.getOrdersBestTimeData(params).subscribe((data: any) => {
            this.lineZoneData = [];
            data.data.map((item: any) => {
                this.lineZoneData.push({
                    XValue: parseInt(item.sales_order_hour),
                    YValue: parseInt(item.sales_order_amount)
                })
            })
            this.lineZoneMinData = data.min;
            this.lineZoneMaxData = data.max;
            this.lineZoneXName = 'sales_order_hour';
            this.lineZoneYName = 'sales_order_amount';
            this.loadingLineZone = false;

            console.log('graph 2', data)
        })
        this.common.getOrdersByDatedata(params).subscribe((data: any) => {
            this.pyramidData = data;
            this.pyramidXName = 'sales_order_day';
            this.pyramidYName = 'sales_order_amount';
            this.loadingPyramid = false;

            console.log('graph 3', data)

        })
        this.common.getOrdersStats(params).subscribe((data: any) => {
            this.summaryData = [...data]
            this.summaryLoading = false
            console.log('summary', data)
        })
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                exportType: 'CurrentPage'
            };
            this.grid.excelExport(excelExportProperties);
        }
    }

    search() {
        let postData = {};
        for (const [key, value] of Object.entries(this.filterForm.value)) {

            switch (key) {
                case 'orderStatus':
                    postData[`${key}`] = value.toString()
                    break;
                case 'paymentMethod':
                    postData[`${key}`] = this.extractId(value, 'payment_type_guid').toString();

                    break;
                case 'register':
                    postData[`${key}`] = this.extractId(value, 'store_register_guid').toString()

                    break;
                case 'store':
                    postData[`${key}`] = this.extractId(value, 'store_guid').toString()

                    break;
                case 'range':
                    postData['startdate'] = this.convertDate(value['startdate']);
                    postData['enddate'] = this.convertDate(value['enddate']);
                    break;
                default:
                    break;
            }
        }
        this.filterForm.value
        this.allApICall(postData);
    }

    extractId(arrayData, idText) {
        let arrayOfId = []
        if (arrayData.length > 0) {
            arrayData.forEach(element => {
                arrayOfId.push(element[`${idText}`])
            });
            return arrayOfId
        } else {
            return '';
        }

    }

    convertDate(date: any) {
        date = new Date(date.toDate());
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return [date.getFullYear(),
            '-',
        (mm > 9 ? '' : '0') + mm,
            '-',
        (dd > 9 ? '' : '0') + dd
        ].join('');
    };

    reset() {
        this.initialiseForm()
    }
}
