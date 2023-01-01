import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { KampanyalarComponent } from './kampanyalar/kampanyalar.component';
import { KampanyaOlusturComponent } from './kampanya-olustur/kampanya-olustur.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        SharedModule,
    ],
    declarations: [
        PagesComponent,
        KampanyalarComponent,
        KampanyaOlusturComponent,
    ],
})
export class PagesModule {}
