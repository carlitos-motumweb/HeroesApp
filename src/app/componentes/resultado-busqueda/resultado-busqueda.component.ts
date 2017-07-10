import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-resultado-busqueda-heroe',
  templateUrl: './resultado-busqueda.component.html'
})
export class ResultadoBusquedaHeroeComponent {
    heroes: Heroe[];
  constructor( private _activatedRoute: ActivatedRoute,
  private _heroeService: HeroesService) {
      this._activatedRoute.params.subscribe( peticion => {
          console.log(peticion['termino']);
          this.heroes = _heroeService.buscarHeroes(peticion['termino']);
          console.log(this.heroes);
      })
  }

}
