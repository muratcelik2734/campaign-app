import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { addOrUpdate } from 'src/app/shared/global.functions';
import { StorageService } from 'src/app/storage/local-storage.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class KampanyaService {
    // Burayı http isteklerinin bulunduğu servis gibi düşünebeliriz :)
    userCompanyField!: string;
    private kampanyaListSubject!: BehaviorSubject<any>;
    public kampanyaList!: Observable<any>;
    constructor(
        private storeageService: StorageService,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router
    ) {
        this.authService.currentUser.subscribe((user) => {
            if (user) {
                this.userCompanyField = 'user-' + user.id + '-kampanya-list';
                this.kampanyaListSubject = new BehaviorSubject<any>(
                    this.storeageService.get(this.userCompanyField)
                );
                this.kampanyaList = this.kampanyaListSubject.asObservable();
            }
        });
    }

    addKampanya(data: any) {
        console.log('Add company', this.userCompanyField, data);
        // Kullanıcının tanımladığı kampanya listesini alıyoruz.
        let companyList = this.storeageService.get(this.userCompanyField);
        if (companyList) {
            data.id = companyList.length + 1; // eklenen kampanyaya özel id oluşturup set et;
            companyList = addOrUpdate(companyList, data, 'id'); // bu kampanya varsa dizide güncelle yoksa ekle
            this.storeageService.set(this.userCompanyField, companyList);
            this.kampanyaListSubject.next(companyList);
        } else {
            data.id = 1;
            // kullanıcıya özel olacak şekilde kampanya eklemek için localstorage de kullanıcıya user id ile alan aç.
            this.storeageService.set(this.userCompanyField, [data]);
            this.kampanyaListSubject.next([data]);
        }
        this.messageService.add({
            severity: 'success',
            summary: 'Başarılı',
            detail: 'Kampanya başarılı bir şekilde oluşturuldu.',
        });
        this.navigateKampanyaList();
    }
    updateKampanya(data:any){
        let companyList = this.storeageService.get(this.userCompanyField);
        companyList = addOrUpdate(companyList, data, 'id'); 
        this.storeageService.set(this.userCompanyField, companyList);
        this.kampanyaListSubject.next(companyList);
        this.messageService.add({
            severity: 'success',
            summary: 'Başarılı',
            detail: 'Kampanya başarılı bir şekilde güncellendi.',
        });
        this.navigateKampanyaList();

    }
    deleteKampanya(id: number) {
        let companyList = this.storeageService.get(this.userCompanyField);
        companyList = companyList.filter((x: any) => x.id !== id);
        this.storeageService.set(this.userCompanyField, companyList);
        this.kampanyaListSubject.next(companyList);
        this.messageService.add({
            severity: 'success',
            summary: 'Başarılı',
            detail: 'Kampanya başarılı bir şekilde silindi.',
        });
    }
    navigateKampanyaList(){
        this.router.navigateByUrl('/main/pages/kampanyalar');
    }
}
