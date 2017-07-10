import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { ResultadoBusquedaHeroeComponent } from './componentes/resultado-busqueda/resultado-busqueda.component';
import { DetalleHeroeComponent } from './componentes/detalle-heroe/detalle-heroe.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe', component: HeroeComponent },
    { path: 'heroeDetalle/:id', component: DetalleHeroeComponent },
    { path: 'heroeBusqueda/:termino', component: ResultadoBusquedaHeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
