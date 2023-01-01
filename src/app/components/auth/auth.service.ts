import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from 'src/app/storage/local-storage.service';
import { user } from '../models/user.mode';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    constructor(
        private storageService: StorageService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.currentUserSubject = new BehaviorSubject<any>(
            this.storageService.get('user')
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(data: any) {
       
        const currentUser:user[] = userList.filter(user => user.email === data.email && user.password === data.password);
       
       if(currentUser.length === 0){
        this.messageService.add({
            severity: 'error',
            summary: 'Hata',
            detail: 'Kullanıcı adı veya şifre hatalı',
        });
        return;
       }
       const userData = {id:currentUser[0].id,fullName:currentUser[0].fullName}
       this.storageService.set('user', userData);
       this.currentUserSubject.next(userData);
       this.router.navigateByUrl('/main/pages/kampanyalar');
    }

    logout() {
        // Logout olurken kampanyaları localstorage 'den temizlemiyorum'ki tekrardan giriş yapıldığında kaybolmasın.
        console.log('Logout');
        this.storageService.removeItem('user');
        this.currentUserSubject.next(null);
        this.router.navigateByUrl('/');
    }
}
// Bu array'e yeni kullanıcılar ekleyebilirsiniz.
export const userList: user[] = [
    {
        id: 1,
        fullName: 'Ercan Can',
        email: 'ercancan@gmail.com',
        password: '123',
    },
    {
        id: 2,
        fullName: 'Ferdi Durak',
        email: 'ferdidurak@gmail.com',
        password: '123',
    },
];
