import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-historia',
  templateUrl: './pre-historia.page.html',
  styleUrls: ['./pre-historia.page.scss'],
})
export class PreHistoriaPage implements OnInit {

  clicar(): void{
         alert("Caro Professor, a idéia é que ao clicar no botão continuar, irá continuar para as telas seguintes,em que haverão mais explicações de cada período e seus respectivos pontos, com duas ou mais telas para cada período histórico");
  
  }

  constructor() { }

  ngOnInit() {
  }

}
