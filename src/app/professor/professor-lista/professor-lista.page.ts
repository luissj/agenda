import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Professor } from '../identidade/professor';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.page.html',
  styleUrls: ['./professor-lista.page.scss'],
})
export class ProfessorListaPage implements OnInit {

listaProfessor: Observable<Professor[]>;

  constructor(private fire: AngularFireDatabase) {

    this.listaProfessor = this.fire.list<Professor>('professor')
    .snapshotChanges().pipe(
      map( lista => lista.map( linha => ({
        key: linha.payload.key, ... linha.payload.val()
      }) ) )

    );
   }

  ngOnInit() {
  }

}
