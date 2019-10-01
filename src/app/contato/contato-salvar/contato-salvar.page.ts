import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-contato-salvar',
  templateUrl: './contato-salvar.page.html',
  styleUrls: ['./contato-salvar.page.scss'],
})
export class ContatoSalvarPage implements OnInit {

  contato: Contato = new Contato();


  constructor(
    private banco: AngularFireDatabase,
    private rota: Router,
    private modal: ModalController,
    private afAuth: AngularFireAuth
  ) {


  }
  ngOnInit() {}

  salvar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.contato.email, this.contato.senha).then(
  () => { this.rota.navigate(['contato-lista']) }
    ).catch((erro) => console.log (erro));
    alert("Cadastro bem Sucessido!")

     if (this.contato.key == null) {
      this.banco.list('contato').push(this.contato);
      this.contato = new Contato();
      this.rota.navigate(['contato-lista']);
    } else {
      this.banco.object('contato/' + this.contato.key).update(this.contato);
      this.modal.dismiss();
    }
  }
}
