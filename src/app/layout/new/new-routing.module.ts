import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { newComponent } from './new.component';

const routes: Routes = [
    {
        path: '',
        component: newComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class newRoutingModule {}
