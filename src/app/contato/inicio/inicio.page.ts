import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  clicar(): void{
         alert("Caro Professor, a idéia é que ao clicar no botão continuar, irá continuar para as telas seguintes,em que haverá no mínimo duas para cada período histórico");

  }
  constructor() { }

  ngOnInit() {
  }

}
