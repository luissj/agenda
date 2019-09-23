import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-login',
  templateUrl: './contato-login.page.html',
  styleUrls: ['./contato-login.page.scss'],
})
export class ContatoLoginPage implements OnInit {
  email: string;
  senha: string;
  contato: any;
  afAuth: any;
  router: any;

  constructor() { }

logar(){
  this.afAuth.auth.createUserWithEmailAndPassword(this.contato.email, this.contato.senha).then(
() => { this.router.navigate(['']) }
  ).catch((erro) => console.log (erro));
  alert("Cadastro bem Sucessido!")
}
  ngOnInit() {

  }

}
