import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../entidade/entidade/contato';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ContatoSalvarPage } from '../contato-salvar/contato-salvar.page';

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.page.html',
  styleUrls: ['./contato-lista.page.scss'],
})
export class ContatoListaPage implements OnInit {

  listaContatos: Observable<Contato[]>;

  constructor(private fire: AngularFireDatabase,
    private modal: ModalController) {
    this.listaContatos = this.fire.list<Contato>('contato')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))

      );
  }
  ngOnInit() { }

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
