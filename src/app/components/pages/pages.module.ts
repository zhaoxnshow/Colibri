import { NgModule } from '@angular/core';

// Component
import { PagesComponent } from './pages.component';

// Module
import { ClientPickModule } from './client-pick/client-pick.module';

const COMPONENTS = [
    PagesComponent
];

@NgModule({
    imports: [
        ClientPickModule
    ],
    declarations: [
        COMPONENTS
    ],
})
export class PagesModule {
}
