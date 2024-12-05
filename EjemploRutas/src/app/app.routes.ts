import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contacto', component: ContactoComponent},
    // {path: '**', component: Page404Component}
    {path: '**', redirectTo: ''}
];
