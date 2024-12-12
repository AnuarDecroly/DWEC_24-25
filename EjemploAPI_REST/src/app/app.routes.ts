import { Routes } from '@angular/router';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesViewComponent } from './pages/series-view/series-view.component';

export const routes: Routes = [
    {path:"", pathMatch: "full", redirectTo: "series"},
    {path: "series", component: SeriesComponent},
    {path: "serie/:idserie", component: SeriesViewComponent},
    {path: "**", redirectTo: "series"}
];
