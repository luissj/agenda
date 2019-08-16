import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-login',
  templateUrl: './contato-login.page.html',
  styleUrls: ['./contato-login.page.scss'],
})
export class ContatoLoginPage implements OnInit {
  email: string;
  senha: string;

  constructor() { }



  ngOnInit() {

  }

}
