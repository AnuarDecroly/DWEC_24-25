import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Page404Component } from './pages/page404/page404.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServicioViewComponent } from './pages/servicio-view/servicio-view.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent, children: [
        {path: 'servicios', component: ServiciosComponent},
        {path: 'servicio/:url', component: ServicioViewComponent},
    ]},
    {path: 'contacto', component: ContactoComponent},
    // {path: '**', component: Page404Component}
    {path: '**', redirectTo: ''}
];
