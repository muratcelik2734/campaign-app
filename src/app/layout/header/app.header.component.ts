import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/components/auth/auth.service';
import { user } from 'src/app/components/models/user.mode';
import { LayoutService } from '../service/app.layout.service';
@Component({
    selector: 'app-topbar',
    templateUrl: './app.header.component.html'
})
export class AppHeaderComponent {

    items!: MenuItem[];
    userInfo!:user;
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,
                private authService: AuthService,
                ) { 
                    authService.currentUser.subscribe(user => {
                        this.userInfo = user;
                    });
                }
    logOut(){
        this.authService.logout();
        
    }
}
