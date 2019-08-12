import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Professor } from '../professor/identidade/professor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  professor: Professor = new Professor();

constructor(private router: Router, private afAuth: AngularFireAuth) {}

logar(){
this.afAuth.auth.signInWithEmailAndPassword( this.professor.email, this.professor.senha).then(
() => { this.router.navigate(['pagina']); }
).catch( (erro) => console.log(erro) );
}

logout() {
this.afAuth.auth.signOut();
this.router.navigate(['/']);
}
}
