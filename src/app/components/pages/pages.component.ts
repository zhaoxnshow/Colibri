import { Component } from '@angular/core';

import { MENU_ITEMS } from '../@atm-shared-pages/components/left-menu/pages-menu';

@Component({
    selector: 'main-page',
    styleUrls: ['pages.component.scss'],
    template: 'main-page.html',
})
export class PagesComponent {

    menu = MENU_ITEMS;
}
