import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatIconModule
} from '@angular/material';
import { newRoutingModule } from './new-routing.module';
import { newComponent } from './new.component';

@NgModule({
    imports: [
        CommonModule,
        newRoutingModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        FormModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSliderModule,
        MatIconModule
    ],
    declarations: [
        newComponent
    ]
})
export class newModule {}
