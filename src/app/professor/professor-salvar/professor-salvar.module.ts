import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { IonicModule } from '@ionic/angular';

import { ProfessorSalvarPage } from './professor-salvar.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorSalvarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorSalvarPage],
  providers: [AngularFireAuth]
})
export class ProfessorSalvarPageModule {}
