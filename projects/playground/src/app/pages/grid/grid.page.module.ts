import { GridComponent } from 'projects/playground/src/app/pages/grid/component/grid.component';
import { UiGridTable } from 'projects/playground/src/app/pages/grid/grid.intl';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    UiGridIntl,
    UiGridModule,
} from '@uipath/angular/components/ui-grid';

import { GridPageComponent } from './grid.page';

@NgModule({
    declarations: [
        GridPageComponent,
        GridComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        UiGridModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
    ],
    providers: [{
        provide: UiGridIntl,
        useClass: UiGridTable,
    }],
})
export class GridModule { }
