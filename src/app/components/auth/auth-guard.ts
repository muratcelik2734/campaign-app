import { Injectable } from '@angular/core';
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate,
    CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { user } from '../models/user.mode';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
    loginIn!: user;
    constructor(private authService: AuthService, private router: Router) {
        this.authService.currentUser.subscribe((data:user) => {
            console.log('User Data Guard',data);
            this.loginIn = data;
        });
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
          if(this.loginIn){
            return true;
          }else{
            this.router.navigate(['/auth/login']);
            localStorage.clear();
            return false;
          }
      }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(route, state);
    }
}
