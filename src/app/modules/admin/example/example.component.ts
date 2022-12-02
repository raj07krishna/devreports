import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ToolbarItems, FilterSettingsModel, GridComponent, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { CommonService } from '../../../services/common.service';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls: ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit
{
    public ordersDataSource!: object[];
    public loadingIndicator: any;
    public toolbarOptions: ToolbarItems[] = ['ExcelExport', 'ColumnChooser'];
    public filterOption: FilterSettingsModel = { type: 'Excel' };
    @ViewChild('grid') public grid!: GridComponent;
    @ViewChild('checkbox')
    public mulObj!: MultiSelectComponent;
    @ViewChild('selectall')
    public checkboxObj!: CheckBoxComponent;
    @ViewChild('dropdown')
    public dropdownObj!: CheckBoxComponent;
    @ViewChild('select')
    public reorderObj!: CheckBoxComponent;
    public mode: string = '';
    public filterPlaceholder: string = '';
    //define the data with category
    public countries: { [key: string]: Object }[] = [
        { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' },
        { Name: 'Greenland', Code: 'GL' },
        { Name: 'Hong Kong', Code: 'HK' },
        { Name: 'India', Code: 'IN' },
        { Name: 'Italy', Code: 'IT' },
        { Name: 'Japan', Code: 'JP' },
        { Name: 'Mexico', Code: 'MX' },
        { Name: 'Norway', Code: 'NO' },
        { Name: 'Poland', Code: 'PL' },
        { Name: 'Switzerland', Code: 'CH' },
        { Name: 'United Kingdom', Code: 'GB' },
        { Name: 'United States', Code: 'US' }
    ];
    storesData = [];
    registerData = [];
    orderTypesData: any[] = [];
    paymentTypesData = [];
    public storesFields: Object = { text: 'store_name', value: 'store_guid' };
    public registerFields: Object = { text: 'store_register_name', value: 'store_register_guid' };
    public orderTypesFields: Object = { text: 'value', value: 'id' };
    public paymentFields: Object = { text: 'payment_type_name', value: 'payment_type_guid' };

    // set the MultiSelect popup height
    public popHeight: string = '350px';

    constructor(private common: CommonService) {
    }

    ngOnInit(): void {
        this.mode = 'CheckBox';
        this.filterPlaceholder = 'Search countries';
        this.loadingIndicator = { indicatorType: 'Shimmer' };
        this.common.getStoreData().subscribe((data: any) => {
            this.storesData = data;
            console.log(data)
        })
        this.common.getOrderTypesData().subscribe((data: any) => {
            data.map((item: string) => {
                let itemObj =
                {
                    'id': item,
                    'value': item
                }
                this.orderTypesData.push(itemObj)
            })
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
        this.common.getOrdersData().subscribe((data: any) => {
            this.ordersDataSource = data;
            console.log('register', data)
        })
    }
    public onChange(): void {
        // enable or disable the select all in Multiselect based on CheckBox checked state
        this.mulObj.showSelectAll = this.checkboxObj.checked;
    }
    public onChangeDrop(): void {
        // enable or disable the dropdown button in Multiselect based on CheckBox checked state
        this.mulObj.showDropDownIcon = this.dropdownObj.checked;
    }
    public onChangeReorder(): void {
        // enable or disable the list reorder in Multiselect based on CheckBox checked state
        this.mulObj.enableSelectionOrder = this.reorderObj.checked;
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                exportType: 'CurrentPage'
            };
            this.grid.excelExport(excelExportProperties);
        }
    }
}
