import { Routes } from '@angular/router';
import { SignupComponent } from './modules/shared/auth/signup/signup.component';

export const routes: Routes = [
    {path: 'register', component: SignupComponent},
    {path: 'login', component: SignupComponent}
];
