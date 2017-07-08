import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent {
    heroeSeleccionado: Heroe;
  constructor( private _activatedRoute: ActivatedRoute,
  private _heroeService: HeroesService) {
      this._activatedRoute.params.subscribe( idHeroe => {
          console.log(idHeroe['id']);
          this.heroeSeleccionado = _heroeService.getHeroe(idHeroe['id']);
          console.log(this.heroeSeleccionado);
      })
  }

}
