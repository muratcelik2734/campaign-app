import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    // Routing kısmını bu şekilde bölmemin sebebi bu alanın genişletilebilir olmasını sağlamak(Kayıt ol,Şifremi sıfırla,Email doğrula vb.)
    imports: [RouterModule.forChild([
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: '',   redirectTo: 'login', pathMatch: 'full' },
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
