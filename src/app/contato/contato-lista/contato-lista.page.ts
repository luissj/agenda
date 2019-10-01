import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../entidade/entidade/contato';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ContatoSalvarPage } from '../contato-salvar/contato-salvar.page';
import * as _ from 'lodash';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.page.html',
  styleUrls: ['./contato-lista.page.scss'],
})
export class ContatoListaPage implements OnInit {

  listaContatos: Observable<Contato[]>;
  listaFiltro: Contato[];
  filtro = {};
  contato: any;
  valor: string;

  constructor(
private rota: Router,
private fire: AngularFireDatabase,
private modal: ModalController) {

    this.listaContatos = this.fire.list<Contato>('contato')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))

      );
  }
  ngOnInit() { }

  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.contato, _.conforms(this.filtro));
}

  excluir(entidade) {
    this.fire.list('contato').remove(entidade.key);
  }

  async alterar(contato) {
    const tela = await this.modal.create({
      component: ContatoSalvarPage, componentProps: { contato: contato }
    });
    tela.present();
  }

}
