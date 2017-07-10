import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    textoHeroeBusqueda: String;
  constructor( private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(nombreHeroe: string) {
      console.log(nombreHeroe);
      this._router.navigate(['/heroeBusqueda/', nombreHeroe]);
  }

}
