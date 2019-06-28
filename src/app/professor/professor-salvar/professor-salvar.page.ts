import { Component, OnInit } from '@angular/core';
import { Professor } from '../identidade/professor';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-professor-salvar',
  templateUrl: './professor-salvar.page.html',
  styleUrls: ['./professor-salvar.page.scss'],
})
export class ProfessorSalvarPage implements OnInit {

     professor: Professor = new Professor();

  constructor(
    private banco: AngularFireDatabase,
    private rota: Router
  ){

   }

  ngOnInit() {
  }

  salvar(){
   this.banco.list('professor').push(this.professor);
   this.professor = new Professor();
   this.rota.navigate(['professor-lista']);
  }
}
