import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

    heroes: Heroe[] = [];

  constructor(private _heroeService: HeroesService,
      private _router: Router) {
  }

  ngOnInit() {
      this.heroes = this._heroeService.getHeroes();
  }

verHeroe(id: number) {
    console.log(`ID: ${id}`);
    this._router.navigate(['/heroeDetalle/', id]);
}
}
