import { Component, OnInit } from '@angular/core';
import { Professor } from '../identidade/professor';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


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
    private modal: ModalController
  ) {

  }

  ngOnInit() {
  }

  salvar() {
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
