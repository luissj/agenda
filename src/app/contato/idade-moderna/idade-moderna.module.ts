import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IdadeModernaPage } from './idade-moderna.page';

const routes: Routes = [
  {
    path: '',
    component: IdadeModernaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IdadeModernaPage]
})
export class IdadeModernaPageModule {}
