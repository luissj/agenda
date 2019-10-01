import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Professor } from '../identidade/professor';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ProfessorSalvarPage } from '../professor-salvar/professor-salvar.page';
import * as _ from 'lodash';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.page.html',
  styleUrls: ['./professor-lista.page.scss'],
})
export class ProfessorListaPage implements OnInit {

listaProfessor: Observable<Professor[]>;
listaFiltro: Professor[];
filtro = {};
professor: any;
valor: string;

  constructor(
private fire: AngularFireDatabase,
private modal: ModalController,
private rota: Router
   ) {

    this.listaProfessor = this.fire.list<Professor>('professor')
    .snapshotChanges().pipe(
      map( lista => lista.map( linha => ({
        key: linha.payload.key, ... linha.payload.val()
      }) ) )

    );
   }

  ngOnInit() {
    this.listaProfessor.subscribe(contato => {
          this.professor = contato;
          this.listaFiltro = _.filter(this.professor, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.professor, _.conforms(this.filtro));
}

  excluir(entidade) {
    this.fire.list('professor').remove(entidade.key);
  }

  async alterar(professor) {
    const tela = await this.modal.create({
      component: ProfessorSalvarPage, componentProps: { professor: professor }
    });
    tela.present();
  }

}
