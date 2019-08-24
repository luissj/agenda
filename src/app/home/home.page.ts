import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { ContatoLoginPage } from '../contato/contato-login/contato-login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contato: ContatoLoginPage = new ContatoLoginPage();

constructor(private router: Router, private afAuth: AngularFireAuth) {}

logar(){
this.afAuth.auth.signInWithEmailAndPassword( this.contato.email, this.contato.senha).then(
() => { this.router.navigate(['inicio']); }
).catch( (erro) => alert("Senha ou Email inexistente") );
}

logout() {
this.afAuth.auth.signOut();
this.router.navigate(['home']);
}
}
