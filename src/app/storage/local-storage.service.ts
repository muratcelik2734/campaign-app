import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class StorageService {
    constructor() {}

    set(key: string, value: any) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.error('Error while setting local storage', err);
        }
    }

    get(key: string) {
        try {
            const data: any = localStorage.getItem(key);
            return JSON.parse(data);
        } catch (err) {
            console.error('Error while getting local storage key ', key, err);
            return '';
        }
    }
    removeItem(key: string){
        try {
            localStorage.removeItem(key);
            return;
        } catch (err) {
            console.error('Error while getting local storage key ', key, err);
            return '';
        }
    }
}
