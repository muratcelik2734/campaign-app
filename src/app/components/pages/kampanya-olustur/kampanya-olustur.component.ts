import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { KampanyaService } from '../kampanya.service';
import { Location } from '@angular/common'
@Component({
    selector: 'app-kampanya-olustur',
    templateUrl: './kampanya-olustur.component.html',
    styleUrls: ['./kampanya-olustur.component.scss'],
})
export class KampanyaOlusturComponent implements OnInit {
    form!: FormGroup;
    editData: any;
    constructor(
        private fb: FormBuilder,
        private messageService: MessageService,
        private kampanyaService: KampanyaService,
        private location: Location,
        private route: Router
    ) {
        this.initForm();
        this.editData = this.route.getCurrentNavigation()?.extras.state;
        if (this.editData) {
            this.form.patchValue(this.editData);
        }
    }

    ngOnInit(): void {}

    initForm() {
        this.form = this.fb.group({
            id: [],
            baslik: [null, Validators.required],
            aciklama: [null, Validators.required],
            baslangic_tarihi: [new Date()],
            puan: [0],
        });
    }

    kampanyaAddOrUpdate() {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            this.messageService.add({
                severity: 'error',
                summary: 'Hata',
                detail: 'Eksik alanları doldurunuz.',
            });
            return;
        }
        if (!this.editData) {
            this.kampanyaService.addKampanya(this.form.value);
        } else {
            this.kampanyaService.updateKampanya(this.form.value);
        }

        return;
    }
    formInvalid(key: string) {
        return (
            !this.form.controls[key].valid && this.form.controls[key]?.touched
        );
    }
    back(): void {
        this.location.back();
    }
}
