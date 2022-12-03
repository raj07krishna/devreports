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
    filterForm: FormGroup

    // set the MultiSelect popup height
    public popHeight: string = '350px';

    constructor(private common: CommonService) {
        this.filterForm = new FormGroup(
            {
                store: new FormControl([]),
                register: new FormControl([]),
                orderStatus: new FormControl([]),
                paymentMethods: new FormControl([]),
                range: new FormGroup({
                    startDate: new FormControl<Date | null>(null),
                    endDate: new FormControl<Date | null>(null),
                })
            }
        )
        console.log(this.filterForm)
    }

    ngOnInit(): void {
        this.loadingIndicator = { indicatorType: 'Shimmer' };
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
        this.common.getOrdersData('').subscribe((data: any) => {
            this.ordersDataSource = data;
            console.log('register', data)
        })
        this.filterForm.valueChanges.subscribe(data => console.log(data))
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
        let params = '?'
        for (const [key, value] of Object.entries(this.filterForm.value)) {
            switch (key) {
                case 'orderStatus':
                    params = `${params}`
                    break;
            
                default:
                    break;
            }
        }
        this.filterForm.value
        this.common.getOrdersData('')
    }
}
