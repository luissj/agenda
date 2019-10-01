import { Component, OnInit } from '@angular/core';
import { Professor } from '../identidade/professor';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from "angularfire2/auth";


@Component({
  selector: 'app-professor-salvar',
  templateUrl: './professor-salvar.page.html',
  styleUrls: ['./professor-salvar.page.scss'],
})
export class ProfessorSalvarPage implements OnInit {

  professor: Professor = new Professor();

  constructor(
    private banco: AngularFireDatabase,
    private rota: Router,
    private modal: ModalController,
    private afAuth: AngularFireAuth
  ) {

  }

  ngOnInit() {
  }

  salvar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.professor.email, this.professor.senha).then(
  () => { this.rota.navigate(['professor-lista']) }
    ).catch((erro) => console.log (erro));
    alert("Cadastro bem Sucessido!")

    if (this.professor.key == null) {
      this.banco.list('professor').push(this.professor);
      this.professor = new Professor();
      this.rota.navigate(['professor-lista']);
    } else {
      this.banco.object('professor/' + this.professor.key).update(this.professor);
      this.modal.dismiss();
    }
  }
}
