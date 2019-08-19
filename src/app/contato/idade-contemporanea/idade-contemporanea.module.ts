import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IdadeContemporaneaPage } from './idade-contemporanea.page';

const routes: Routes = [
  {
    path: '',
    component: IdadeContemporaneaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IdadeContemporaneaPage]
})
export class IdadeContemporaneaPageModule {}
