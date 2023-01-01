import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Kampanyalar', icon: 'pi pi-fw pi-book', routerLink: ['/main/pages/kampanyalar'] },
                    { label: 'Kampanya Oluştur', icon: 'pi pi-fw pi-plus', routerLink: ['/main/pages/kampanya-olustur'] },
                ]
            },
          
        ];
    }
}
