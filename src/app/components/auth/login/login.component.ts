import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service'; 
import { user } from '../../models/user.mode';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    valCheck: string[] = ['remember'];

    form!: FormGroup;
    loginControl: any;
    constructor(
        public layoutService: LayoutService,
        private fb: FormBuilder,
        private messageService: MessageService,
        private authService: AuthService,
        private route: Router
    ) {
        this.authService.currentUser.subscribe((data:user) => {
            if(data){
                this.route.navigateByUrl('/main/pages/kampanyalar');
            }
        });
    }
    ngOnInit(): void {
        this.initForm();
    }
    initForm() {
        this.form = this.fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required],
        });
    }
    login() {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            this.messageService.add({
                severity: 'error',
                summary: 'Hata',
                detail: 'Eksik alanları doldurunuz',
            });
            return;
        }

        this.authService.login(this.form.value);
    }
}


