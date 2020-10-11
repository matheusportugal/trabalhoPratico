import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcNotasPage } from './calc-notas.page';

const routes: Routes = [
  {
    path: '',
    component: CalcNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcNotasPageRoutingModule {}
