import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Component } from '@angular/core';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contacto', component: ContactoComponent},
    // pagina 404, tiene que ir en orden
    //{path: '**', component: Pagina404Component},
    {path: '**', redirectTo: ''}
];
