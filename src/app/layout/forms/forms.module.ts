import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatIconModule
} from '@angular/material';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

@NgModule({
    imports: [
        CommonModule,
        FormsRoutingModule,
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
        FormFieldComponent,
        FormsComponent
    ]
})
export class FormsModule {}
