import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { viewRoutingModule } from './view-routing.module';
import { viewComponent } from './view.component';

@NgModule({
    imports: [
        CommonModule,
        viewRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule
    ],
    declarations: [viewComponent]
})
export class viewModule {}
