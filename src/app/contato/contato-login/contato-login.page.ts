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

//redefinir(){
  //this.afAuth.auth.signInWithEmailAndPasswordResetEmail(this.contato.email).then(() =>alert()); { this.router.navigate(['contato-salvar'])}
//}

  ngOnInit() {

  }

}
