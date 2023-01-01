import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KampanyaOlusturComponent } from './kampanya-olustur/kampanya-olustur.component';
import { KampanyalarComponent } from './kampanyalar/kampanyalar.component';
import { PagesComponent } from './pages.component';
const routes = [
    {
        path: '',
        component: PagesComponent,
        children: [ 
            {
                path: '',
                component: KampanyalarComponent,
            }, 
            {
                path: 'kampanyalar',
                component: KampanyalarComponent,
            },
            {
                path: 'kampanya-olustur',
                component: KampanyaOlusturComponent,
            }, 
        ],
        
    },
     
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
