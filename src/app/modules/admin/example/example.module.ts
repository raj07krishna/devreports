import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ColumnChooserService, ColumnMenuService, FilterService, FreezeService, GridModule, PageService, ResizeService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MultiSelectModule,
        CheckBoxModule,
        DateRangePickerModule,
        GridModule,
        DropDownListAllModule,
        MenuModule
      ],
      providers: [PageService, SortService, FilterService, ColumnMenuService, FreezeService, ToolbarService, ColumnChooserService, ResizeService],
    
})
export class ExampleModule
{
}
