import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ColumnChooserService, ColumnMenuService, FilterService, FreezeService, GridModule, PageService, ResizeService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(exampleRoutes),
        MultiSelectModule,
        CheckBoxModule,
        DateRangePickerModule,
        GridModule,
        DropDownListAllModule,
        MenuModule,
        MatSelectModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
    ],
    providers: [MatNativeDateModule, PageService, SortService, FilterService, ColumnMenuService, FreezeService, ToolbarService, ColumnChooserService, ResizeService],

})
export class ExampleModule {
}
