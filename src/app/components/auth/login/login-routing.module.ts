import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
    /* Bu yapı genişletilebilir yapılmıştır.
    (Kaydol,şifremi sıfırla,email doğrula gibi ekranlarda bu routing modülde yönetebilirz.)*/

    imports: [RouterModule.forChild([{ path: '', component: LoginComponent }])],
    exports: [RouterModule],
})
export class LoginRoutingModule {}
