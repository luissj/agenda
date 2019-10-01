import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicModule } from '@ionic/angular';

import { ContatoSalvarPage } from './contato-salvar.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoSalvarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContatoSalvarPage],
    providers: [AngularFireAuth]
})
export class ContatoSalvarPageModule {}
