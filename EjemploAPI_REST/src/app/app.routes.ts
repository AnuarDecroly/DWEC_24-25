import { Routes } from '@angular/router';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesViewComponent } from './pages/series-view/series-view.component';
import { FormSerieComponent } from './pages/form-serie/form-serie.component';

export const routes: Routes = [
    {path:"", pathMatch: "full", redirectTo: "series"},
    {path: "series", component: SeriesComponent},
    {path: "serie/:idserie", component: SeriesViewComponent},
    {path: "nueva/serie", component: FormSerieComponent},
    {path: "actualizar/serie/:idserie", component: FormSerieComponent},
    {path: "**", redirectTo: "series"}
];
