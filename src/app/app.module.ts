import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routes
import {APP_ROUTING} from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { AboutComponent } from './componentes/about/about.component';
import { ResultadoBusquedaHeroeComponent } from './componentes/resultado-busqueda/resultado-busqueda.component';

// Servicios
import {HeroesService} from './servicios/heroes.service';
import { DetalleHeroeComponent } from './componentes/detalle-heroe/detalle-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    HeroeComponent,
    FooterComponent,
    AboutComponent,
    DetalleHeroeComponent,
    ResultadoBusquedaHeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
