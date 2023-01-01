import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KampanyaService } from '../kampanya.service';

@Component({
    selector: 'app-kampanyalar',
    templateUrl: './kampanyalar.component.html',
    styleUrls: ['./kampanyalar.component.scss'],
})
export class KampanyalarComponent implements OnInit {
    kampanyaList: any;
    cols!: any;

    constructor(private kampanyaService: KampanyaService,private router: Router) {}

    ngOnInit(): void {
        this.cols = [
            { field: 'baslik', header: 'Başlık' },
            { field: 'aciklama', header: 'Açıklama' },
            { field: 'baslangic_tarihi', header: 'Başlangıç Tarihi' },
            { field: 'puan', header: 'Puan' },
            { field: 'actions', header: 'Action' },
        ];
        this.kampanyaService.kampanyaList.subscribe((data) => {
            console.log('Kampanya listes', data);
            this.kampanyaList = data;
        });
    }
    deleteKampanya(id: number) {
        this.kampanyaService.deleteKampanya(id);
    }
    editKampanya(item:any){
      this.router.navigate(['/main/pages/kampanya-olustur'],{state:item});
    }
}
